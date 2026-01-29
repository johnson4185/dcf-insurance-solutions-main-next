import Link from "next/link";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";

export default function IntegrationsGuide() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollFadeIn>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Integration Guides</h1>
              <p className="text-muted-foreground">Guidance for integrating systems with DCF via REST APIs, webhooks, and SDKs.</p>
            </div>
          </ScrollFadeIn>

          <article className="prose max-w-none mb-8">
            <h2>Authentication</h2>
            <p>Use API keys or OAuth tokens for authenticating API requests. Keep keys secure and rotate them regularly. Use least-privilege scopes for integration tokens.</p>

            <h2>REST API Basics</h2>
            <p>All endpoints are RESTful JSON. Use standard HTTP verbs and return codes. Include the API key in the Authorization header: <code>Authorization: Bearer &lt;API_KEY&gt;</code>.</p>

            <h3>Example Request</h3>
            <pre><code>{`POST /v1/policies
Content-Type: application/json
Authorization: Bearer <API_KEY>

{ "policy": { "holder": "Acme Corp", "product": "insurance-now" } }`}</code></pre>

            <h2>Webhooks</h2>
            <p>Subscribe to events for policy changes, payments, and claims. Validate webhook signatures and retry with idempotency when receiving duplicate deliveries.</p>

            <h3>Security</h3>
            <p>Use TLS, validate certificates, and verify webhook signatures. Implement rate limiting and exponential backoff for retries.</p>

            <h2>SDKs & Samples</h2>
            <p>We provide official SDKs (JavaScript, Java, .NET) and sample code. Check our GitHub repo for the latest SDKs and examples.</p>

            <h2>Error Handling</h2>
            <p>Use standard HTTP status codes and inspect error payloads for retryable vs permanent errors. Log request IDs to assist support debugging.</p>

            <h2>Support</h2>
            <p>For integration assistance, open a ticket via the <Link href="/resources/support">Support Center</Link> and include request examples and correlation IDs.</p>
          </article>

          <div className="mt-8">
            <Link href="/resources/docs" className="text-primary font-semibold">Back to Documentation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
