import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

/*
 * BEFORE PUBLISHING:
 * - Replace every [BRACKET] (registered address, retention period in §8,
 *   cookies/analytics tool in §9, grievance officer in §11, the "updated" date).
 * - Have a lawyer review — you handle privileged documents and make GDPR/DPDP claims.
 */

const TITLE = "Privacy Policy — Lexi Translation Lab";
const DESC =
  "How Lexi Translation Lab collects, uses, protects, and retains personal data, and your rights under the DPDP Act and GDPR.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      kicker="Legal · Privacy"
      titleHead="Privacy"
      titleAccent="Policy"
      updated="[DATE]"
      lead="How we collect, use, protect, and retain your personal data — and the rights you have over it under the Digital Personal Data Protection Act, 2023 and the GDPR."
    >
      <h2>1. Who we are</h2>
      <p>
        Lexi Translation Lab ("Lexi", "we", "us", "our") provides certified
        legal translation, true-type document copies, and audio/video
        transcription services. We are based in New Delhi, India, and operate
        remotely worldwide. For any privacy question, contact us at{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lexilab.in" target="_blank" rel="noopener noreferrer">
          info@lexilab.in
        </a>{" "}
        or +91 83686 99442 (WhatsApp). Registered address: [FULL REGISTERED
        ADDRESS].
      </p>

      <h2>2. The information we collect</h2>
      <h3>(a) Information you give us directly</h3>
      <ul>
        <li>Contact details: name, email address, phone number, organisation.</li>
        <li>Communications you send us by email, WhatsApp, or our forms.</li>
        <li>Billing details needed to process payment.</li>
      </ul>
      <h3>(b) Documents and recordings you submit</h3>
      <p>
        The files you send us for translation or transcription may themselves
        contain personal data — and sometimes sensitive personal data — about
        you or about third parties (for example, names, identity documents,
        financial records, medical or legal details). We process this material{" "}
        <strong>only</strong> to deliver the service you requested.
      </p>
      <h3>(c) Information collected automatically</h3>
      <p>
        When you visit our website we may collect limited technical data such as
        IP address, browser type, and pages viewed, through cookies or similar
        tools. See Section 9.
      </p>

      <h2>3. Why we use your information and our legal basis</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal basis (GDPR, where it applies)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prepare quotes and deliver translation/transcription services</td>
            <td>Performance of a contract</td>
          </tr>
          <tr>
            <td>Communicate with you about your matter</td>
            <td>Contract / legitimate interests</td>
          </tr>
          <tr>
            <td>Process payments and keep accounting records</td>
            <td>Legal obligation / contract</td>
          </tr>
          <tr>
            <td>Maintain security and prevent misuse</td>
            <td>Legitimate interests</td>
          </tr>
          <tr>
            <td>Send service updates you have asked for</td>
            <td>Consent</td>
          </tr>
        </tbody>
      </table>
      <p>
        Where Indian law applies, we process personal data on the basis of your
        consent and the legitimate uses permitted under the Digital Personal
        Data Protection Act, 2023 (DPDP Act).
      </p>

      <h2>4. Documents containing other people's data</h2>
      <p>
        When the files you give us contain personal data about people other than
        you, <strong>you are responsible for ensuring you have the right to
        share that data with us</strong>, and we act as a data processor on your
        behalf. For business clients, this is governed by our separate Data Processing Agreement.
      </p>

      <h2>5. How we protect your information</h2>
      <ul>
        <li>Encryption in transit (TLS 1.3) and at rest (AES-256).</li>
        <li>Access limited to the linguists and staff working on your matter.</li>
        <li>Confidentiality obligations on everyone who handles your files.</li>
        <li>Matter-specific NDAs available on request before any file is opened.</li>
      </ul>
      <p>
        No system is perfectly secure, but we take reasonable and appropriate
        measures to protect your data.
      </p>

      <h2>6. Who we share information with</h2>
      <p>We do not sell your data. We share it only with:</p>
      <ul>
        <li>
          <strong>Linguists and reviewers</strong> assigned to your matter,
          under confidentiality obligations.
        </li>
        <li>
          <strong>Service providers</strong> that help us operate (e.g. secure
          hosting, payment processing). A current list of categories is
          available on request. [List named tools here if applicable.]
        </li>
        <li>
          <strong>Authorities</strong>, where we are legally required to
          disclose.
        </li>
      </ul>

      <h2>7. International transfers</h2>
      <p>
        We are based in India and may serve clients in other countries. Where we
        transfer personal data across borders, we use appropriate safeguards
        such as Standard Contractual Clauses, and we transfer only what is
        necessary.
      </p>

      <h2>8. How long we keep your data</h2>
      <ul>
        <li>
          Project files (your documents and our deliverables): retained for [e.g.
          30 / 60 / 90] days after delivery, then securely deleted, unless you
          ask us to delete them sooner or retain them longer.
        </li>
        <li>
          Contact and billing records: retained as required by tax and
          accounting law in India.
        </li>
      </ul>
      <p>
        A verified deletion certificate is available on request for project
        files.
      </p>

      <h2>9. Cookies and analytics</h2>
      <p>
        Our website uses [strictly necessary cookies] and [optional analytics —
        name the tool]. You can control cookies through your browser settings.
        [If you use analytics that needs consent, describe your cookie banner
        here.]
      </p>

      <h2>10. Your rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>ask us to correct or update it;</li>
        <li>ask us to delete it;</li>
        <li>object to or restrict certain processing;</li>
        <li>withdraw consent at any time;</li>
        <li>
          lodge a complaint with a supervisory authority (the Data Protection
          Board of India under the DPDP Act, or your local EU authority).
        </li>
      </ul>
      <p>
        To exercise any right, email{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lexilab.in" target="_blank" rel="noopener noreferrer">
          info@lexilab.in
        </a>
        . We will respond within the time required by law.
      </p>

      <h2>11. Grievance / Data Protection contact</h2>
      <p>
        Grievance Officer (DPDP Act): [NAME] · [EMAIL]. [If you handle EU data at
        scale, also name a Data Protection Officer or EU representative here.]
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The "Last updated" date at
        the top shows the latest version, and material changes will be notified
        where required.
      </p>
    </LegalPage>
  );
}
