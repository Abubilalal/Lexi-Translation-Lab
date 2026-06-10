import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

/*
 * BEFORE PUBLISHING:
 * - Replace every [BRACKET] (payment terms §4, revision window §8,
 *   liability cap §9, governing law/jurisdiction §12, the "updated" date).
 * - The certification disclaimer (§7) and liability cap (§9) are the clauses
 *   most worth a lawyer's review.
 */

const TITLE = "Terms of Service — Lexi Translation Lab";
const DESC =
  "The terms governing quotes, payment, turnaround, certification, liability, and disputes for Lexi Translation Lab services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      kicker="Legal · Terms"
      titleHead="Terms of"
      titleAccent="Service"
      updated="[DATE]"
      lead="The agreement between you and Lexi Translation Lab: how quotes and payment work, your responsibilities, the scope of our certification, and how disputes are handled."
    >
      <h2>1. About these terms</h2>
      <p>
        These Terms of Service ("Terms") govern your use of the services
        provided by Lexi Translation Lab ("Lexi", "we", "us"). By requesting a
        quote or placing an order, you ("Client", "you") agree to these Terms. If
        you are agreeing on behalf of an organisation, you confirm you have
        authority to bind it.
      </p>

      <h2>2. Our services</h2>
      <p>
        We provide certified Hindi ↔ English legal translation, certified
        true-type document copies, audio/video transcription, and related filing
        support. The exact scope of any engagement is set out in the quote we
        issue for that matter.
      </p>

      <h2>3. Quotes, orders and acceptance</h2>
      <ul>
        <li>
          We provide a written quote stating the fee, the output basis (e.g. per
          output page or per audio minute), and the turnaround.
        </li>
        <li>
          A quote is an offer; an engagement begins only when you confirm
          acceptance in writing and, where applicable, pay any agreed deposit.
        </li>
        <li>
          Urgent (24–48 hour) work must be confirmed in writing before we begin,
          and is charged at our urgent rates.
        </li>
      </ul>

      <h2>4. Fees and payment</h2>
      <ul>
        <li>
          Fees are charged on the basis stated in the quote. For translation,
          charges are based on <strong>output</strong> pages (a source document
          may expand once translated).
        </li>
        <li>
          Payment terms: [e.g. full payment in advance / 50% deposit, balance on
          delivery / net 15 days for approved business accounts].
        </li>
        <li>
          Prices are in Indian Rupees (₹) unless stated otherwise. [State your
          position on taxes such as GST.]
        </li>
        <li>
          Late payments may attract interest at [RATE] and we may pause work
          until accounts are settled.
        </li>
      </ul>

      <h2>5. Your responsibilities</h2>
      <p>You agree that:</p>
      <ul>
        <li>you have the legal right to share the documents and recordings you give us;</li>
        <li>
          the source material is legible, complete, and accurate — we translate
          or transcribe what is provided and are not responsible for errors in
          the source;
        </li>
        <li>
          you will tell us any specific requirements (target jurisdiction,
          preferred terminology, formatting, deadlines) before we begin;
        </li>
        <li>the materials are not unlawful and your purpose is lawful.</li>
      </ul>

      <h2>6. Turnaround and delivery</h2>
      <p>
        We will use reasonable efforts to meet the turnaround stated in the
        quote. Turnaround starts when we have received complete, legible
        materials and any agreed payment, and a binding quote has been accepted.
        Delays caused by incomplete files, late instructions, or events outside
        our control extend the deadline accordingly. Specific service
        commitments are set out in our <a href="/sla">Service Level Agreement</a>.
      </p>

      <h2>7. Certification, accuracy and acceptance by authorities</h2>
      <ul>
        <li>
          We provide a signed Certificate of Accuracy with certified work,
          prepared by qualified linguists with cross-review.
        </li>
        <li>
          We take great care with accuracy. However,{" "}
          <strong>
            final acceptance of any document rests with the court, government
            body, or other authority to which you submit it.
          </strong>{" "}
          Requirements differ between jurisdictions and change over time, and we
          cannot guarantee that any particular authority will accept a document.
        </li>
        <li>
          If you tell us the destination authority in advance, we will format the
          work to the standard we understand that authority to require at the
          time.
        </li>
      </ul>

      <h2>8. Revisions and corrections</h2>
      <p>
        If you believe there is an error in our work, tell us within [e.g. 7]
        days of delivery, identifying the specific passages. We will correct
        genuine errors in our work at no charge. Changes to the source material,
        or new requirements introduced after delivery, are treated as new work.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>To the fullest extent permitted by law:</p>
      <ul>
        <li>
          We are not liable for indirect, consequential, or special losses,
          including loss of profit, opportunity, or the outcome of any legal or
          administrative proceeding.
        </li>
        <li>
          Our total liability for any matter is limited to [the fees paid for
          that matter / a stated cap, e.g. ₹_____].
        </li>
        <li>Nothing in these Terms limits liability that cannot be limited by law.</li>
      </ul>

      <h2>10. Confidentiality</h2>
      <p>
        We keep your materials confidential and use them only to provide the
        service. We are happy to sign a matter-specific NDA before work begins.
        Our data-handling commitments are set out in our{" "}
        <a href="/privacy">Privacy Policy</a> and, for business clients.
      </p>

      <h2>11. Intellectual property</h2>
      <p>
        On full payment, you own the deliverables we produce for you. We retain
        ownership of our own tools, templates, and general know-how. We may keep
        one archival copy as needed for our records and the retention periods
        stated in our Privacy Policy.
      </p>

      <h2>12. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of India. The courts of [New Delhi,
        India] have [exclusive / non-exclusive] jurisdiction. [If you prefer
        arbitration, state the seat, language, and rules here instead.]
      </p>

      <h2>13. Changes and contact</h2>
      <p>
        We may update these Terms; the version in force is the one published when
        you accept a quote. Questions:{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lexilab.in" target="_blank" rel="noopener noreferrer">
          info@lexilab.in
        </a>{" "}
        · +91 83686 99442 (WhatsApp).
      </p>
    </LegalPage>
  );
}
