import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

/*
 * BEFORE PUBLISHING:
 * - Only promise numbers you can consistently hit. Fill the standard turnaround
 *   (§2), the accuracy figure (§3), the support response times (§4), and choose
 *   a remedy in §6.
 * - If you don't want to offer service credits, soften §6 to "we will
 *   re-perform the affected work".
 */

const TITLE = "Service Level Agreement — Lexi Translation Lab";
const DESC =
  "Lexi Translation Lab's service commitments: quote response, turnaround tracks, accuracy standard, support availability, and remedies.";

export const Route = createFileRoute("/sla")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: SlaPage,
});

function SlaPage() {
  return (
    <LegalPage
      kicker="Legal · SLA"
      titleHead="Service Level"
      titleAccent="Agreement"
      updated="[DATE]"
      lead="The service levels we aim to provide — quote response, turnaround, accuracy, support, and what happens if we miss a target. This supplements our Terms of Service."
    >
      <p>
        This Service Level Agreement ("SLA") describes the service levels Lexi
        Translation Lab ("we", "us") aims to provide. It supplements our{" "}
        <a href="/terms">Terms of Service</a>; where they conflict, the Terms
        govern unless this SLA expressly states otherwise.
      </p>

      <h2>1. Quote response</h2>
      <ul>
        <li>
          We aim to respond to quote requests within <strong>15 minutes</strong>,
          24/7, via email or WhatsApp.
        </li>
        <li>
          A binding quote — stating fee, output basis, and turnaround — is issued
          once we have reviewed your materials.
        </li>
      </ul>

      <h2>2. Turnaround</h2>
      <table>
        <thead>
          <tr>
            <th>Track</th>
            <th>Target turnaround</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard</td>
            <td>[state your standard, e.g. 3–5 business days, by volume]</td>
          </tr>
          <tr>
            <td>Urgent</td>
            <td>24–48 hours</td>
          </tr>
        </tbody>
      </table>
      <p>
        Turnaround begins once we have received complete, legible materials, you
        have accepted the binding quote in writing, and any agreed payment is
        made. Deadlines are extended by delays caused by incomplete files, late
        instructions, or events outside our reasonable control.
      </p>

      <h2>3. Accuracy standard</h2>
      <ul>
        <li>
          Certified work is translated and cross-reviewed by qualified linguists
          and delivered with a Certificate of Accuracy.
        </li>
        <li>
          We target an accuracy standard of [state realistically, e.g. 99.5%+ on
          audited samples].
        </li>
        <li>
          Final acceptance of any document rests with the receiving court or
          authority, as set out in our Terms.
        </li>
      </ul>

      <h2>4. Support availability</h2>
      <ul>
        <li>WhatsApp and email support: <strong>24/7</strong>.</li>
        <li>
          We aim to acknowledge support messages within [e.g. 15 minutes] and
          substantive queries within [e.g. 2 hours].
        </li>
      </ul>

      <h2>5. Security and confidentiality commitments</h2>
      <ul>
        <li>Encryption in transit (TLS 1.3) and at rest (AES-256).</li>
        <li>Matter-specific NDA available before any file is opened.</li>
        <li>
          Secure deletion of project files after the retention period, with a
          deletion certificate on request.
        </li>
      </ul>

      <h2>6. If we miss a target</h2>
      <p>
        If we miss a committed turnaround for reasons within our control:
      </p>
      <ul>
        <li>we will prioritise and complete your work as quickly as possible; and</li>
        <li>
          [choose one: we will waive the urgent surcharge for that order / apply a
          service credit of __% toward that order / re-perform affected work at no
          charge].
        </li>
      </ul>
      <p>
        This is your sole and exclusive remedy for a missed service level,
        subject to the limitation of liability in our{" "}
        <a href="/terms">Terms</a>.
      </p>

      <h2>7. Exclusions</h2>
      <p>These service levels do not apply where a delay or issue arises from:</p>
      <ul>
        <li>incomplete, illegible, or corrupted source materials;</li>
        <li>late or changed instructions from you;</li>
        <li>non-payment or accounts on hold;</li>
        <li>events outside our reasonable control (force majeure).</li>
      </ul>

      <h2>8. Contact</h2>
      <p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lexilab.in" target="_blank" rel="noopener noreferrer">
          info@lexilab.in
        </a>{" "}
        · +91 83686 99442 (WhatsApp).
      </p>
    </LegalPage>
  );
}
