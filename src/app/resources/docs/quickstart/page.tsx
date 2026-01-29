import Link from "next/link";

export default function QuickStart() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Quick Start Guide</h1>
          <p className="text-muted-foreground mb-6">This quick start shows how to get up and running with DCF in minutes.</p>

          <ol className="space-y-4 list-decimal pl-6">
            <li>
              <strong>Sign up</strong> — Create an account and obtain API credentials.
            </li>
            <li>
              <strong>Install</strong> — Install our SDK or use the REST API endpoints.
            </li>
            <li>
              <strong>Configure</strong> — Configure your organization settings and integrations.
            </li>
            <li>
              <strong>Test</strong> — Use sandbox credentials to validate workflows.
            </li>
          </ol>

          <div className="mt-8">
            <Link href="/resources/docs" className="text-primary font-semibold">Back to Documentation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
