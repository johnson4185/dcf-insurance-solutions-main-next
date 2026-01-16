/**
 * Logger Utility
 * 
 * Centralized logging system for consistent error tracking and debugging.
 * In production, logs can be sent to external services like Sentry or Datadog.
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
  stack?: string;
}

class Logger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  /**
   * Format log entry for output
   */
  private formatLog(entry: LogEntry): string {
    const { level, message, timestamp, context } = entry;
    let formattedLog = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (context && Object.keys(context).length > 0) {
      formattedLog += `\nContext: ${JSON.stringify(context, null, 2)}`;
    }
    
    return formattedLog;
  }

  /**
   * Send log to external service (production)
   * Replace with actual service integration (Sentry, Datadog, etc.)
   */
  private sendToService(_entry: LogEntry): void {
    // TODO: Implement external logging service integration
    // Example with Sentry:
    // if (_entry.level === 'error') {
    //   Sentry.captureException(new Error(_entry.message), {
    //     extra: _entry.context,
    //     level: _entry.level,
    //   });
    // }
  }

  /**
   * Generic log method
   */
  private log(level: LogLevel, message: string, context?: Record<string, unknown>, error?: Error): void {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
      stack: error?.stack,
    };

    // Always log errors, even in production
    // In development, log everything
    if (this.isDevelopment || level === 'error') {
      const formattedLog = this.formatLog(entry);
      
      switch (level) {
        case 'debug':
          console.debug(formattedLog);
          break;
        case 'info':
          console.info(formattedLog);
          break;
        case 'warn':
          console.warn(formattedLog);
          break;
        case 'error':
          console.error(formattedLog);
          if (error) console.error(error);
          break;
      }
    }

    // Send to external service in production
    if (!this.isDevelopment && (level === 'error' || level === 'warn')) {
      this.sendToService(entry);
    }
  }

  /**
   * Debug level - detailed information for diagnosing problems
   * Only shown in development
   */
  debug(message: string, context?: Record<string, unknown>): void {
    this.log('debug', message, context);
  }

  /**
   * Info level - general informational messages
   */
  info(message: string, context?: Record<string, unknown>): void {
    this.log('info', message, context);
  }

  /**
   * Warning level - potentially harmful situations
   */
  warn(message: string, context?: Record<string, unknown>): void {
    this.log('warn', message, context);
  }

  /**
   * Error level - error events that might still allow the app to continue
   */
  error(message: string, error?: Error, context?: Record<string, unknown>): void {
    this.log('error', message, context, error);
  }

  /**
   * Track API request for monitoring
   */
  apiRequest(method: string, path: string, statusCode: number, duration: number): void {
    this.info(`API ${method} ${path}`, {
      method,
      path,
      statusCode,
      duration: `${duration}ms`,
    });
  }

  /**
   * Track user actions for analytics
   */
  userAction(action: string, userId?: string, metadata?: Record<string, unknown>): void {
    this.info(`User action: ${action}`, {
      action,
      userId,
      ...metadata,
    });
  }
}

// Export singleton instance
export const logger = new Logger();

/**
 * Performance monitoring helper
 * Measures execution time of async operations
 * 
 * @example
 * const data = await withPerformanceLog('fetchUserData', async () => {
 *   return await fetch('/api/users');
 * });
 */
export async function withPerformanceLog<T>(
  operationName: string,
  operation: () => Promise<T>
): Promise<T> {
  const startTime = performance.now();
  
  try {
    const result = await operation();
    const duration = performance.now() - startTime;
    
    logger.debug(`Performance: ${operationName}`, {
      duration: `${duration.toFixed(2)}ms`,
    });
    
    return result;
  } catch (error) {
    const duration = performance.now() - startTime;
    
    logger.error(
      `Performance: ${operationName} failed`,
      error as Error,
      { duration: `${duration.toFixed(2)}ms` }
    );
    
    throw error;
  }
}
