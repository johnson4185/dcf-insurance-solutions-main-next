import Link from "next/link";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";

export default function AdminGuide() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollFadeIn>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Admin Guide</h1>
              <p className="text-muted-foreground">Operational and configuration guidance for administrators managing DCF products for your organization.</p>
            </div>
          </ScrollFadeIn>

          <article className="prose max-w-none mb-8">
            <h2>Overview</h2>
            <p>This Admin Guide covers account setup, roles &amp; permissions, platform configuration, security practices, and operational tasks for administrators.</p>

            <h3>1. Account & Organization Setup</h3>
            <p>Create your organization from the admin console, invite users, and configure organizational settings such as time zone, locale, and branding.</p>

            <h3>2. Roles & Permissions</h3>
            <p>DCF uses role-based access control (RBAC). Built-in roles include Admin, Product Manager, Operator, and Viewer. Create custom roles with scoped permissions for fine-grained access.</p>

            <h3>3. Authentication</h3>
            <p>Support for SSO (SAML/OIDC) is available. Configure your identity provider in the Admin &gt; Security panel and test SSO in a staging environment before enabling for production users.</p>

            <h3>4. Product Configuration</h3>
            <p>Use the admin console to enable product modules, define business rules, and manage integrations. Changes can be staged and previewed before publishing to production environments.</p>

            <h3>5. Monitoring & Logs</h3>
            <p>Enable audit logging and integrate with your SIEM for centralized monitoring. Configure alerts for critical events (failed logins, integration failures, or policy violations).</p>

            <h3>6. Backups & DR</h3>
            <p>We recommend exporting configuration snapshots regularly and verifying backups. Follow your internal DR procedures and run failover tests annually.</p>

            <h3>7. Troubleshooting</h3>
            <p>Start with the audit logs and recent activity feed. For integration errors, capture request/response examples and use the Diagnostics panel in the Admin console.</p>

            <h3>8. Support & Escalation</h3>
            <p>If you need help, open a ticket via our <Link href="/resources/support">Support Center</Link> and include screenshots, environment IDs, and steps to reproduce.</p>
          </article>

          <div className="mt-8">
            <Link href="/resources/docs" className="text-primary font-semibold">Back to Documentation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
