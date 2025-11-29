import React from "react";
import FaqsForm from "@/components/Common/FaqsForm";
import Link from "next/link";

function TermsOfServicePage() {
  return (
    <section className="w-full relative py-10 h-auto logistics-container grid grid-cols-3 gap-5">
      <div className="px-4 md:px-16 max-w-4xl mx-auto text-text-secondary col-span-2">

        <h1 className="text-3xl font-bold mb-6 text-primary">Terms of Service</h1>
        <p className="mb-4 text-sm text-text-secondary">Effective Date: 24 July 2024</p>

        {/* ================================
              ACCEPTANCE OF TERMS
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website, you acknowledge that you have read,
            understood, and agree to be bound by the terms and conditions outlined
            herein. If you do not agree with any part of these terms, please refrain
            from using the website.
          </p>
          <p className="mb-4">
            Your continued use of the site constitutes your acceptance of any
            revisions or updates to these terms. It is your responsibility to review
            this page periodically for changes.
          </p>
        </section>

        {/* ================================
              USER CONDUCT
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">2. User Conduct</h2>
          <p className="mb-2">Users agree to:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Avoid harassment, abuse, or discrimination.</li>
            <li>Avoid uploading malicious software or harmful content.</li>
            <li>Not impersonate any person or entity.</li>
            <li>Not post defamatory, obscene, or rights-violating content.</li>
            <li>Not attempt unauthorized access to any part of the website.</li>
          </ul>
          <p>
            Violations may result in account termination and legal action.
          </p>
        </section>

        {/* ================================
              INTELLECTUAL PROPERTY
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
          <p className="mb-4">
            All content, trademarks, logos, and intellectual property on this
            website belong to <strong>Burak Group</strong> and its subsidiaries
            including <strong>Rhosigma Engineering & Automation Pvt Ltd</strong> and{" "}
            <strong>Sovorun</strong>.
          </p>

          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>
              Unauthorized use, reproduction, or distribution is strictly prohibited.
            </li>
            <li>
              Users are granted a limited, non-exclusive, revocable license for
              personal, non-commercial use.
            </li>
            <li>
              Third-party content is subject to their respective rights.
            </li>
          </ul>
        </section>

        {/* ================================
              PROHIBITED ACTIVITIES
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">4. Prohibited Activities</h2>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Unlawful conduct</li>
            <li>Harassment or discriminatory behavior</li>
            <li>Uploading malware or harmful software</li>
            <li>Impersonating another individual or entity</li>
            <li>Intellectual property infringement</li>
            <li>Unauthorized access attempts</li>
          </ul>
        </section>

        {/* ================================
              DISCLAIMER OF WARRANTIES
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">5. Disclaimer of Warranties</h2>
          <p className="mb-4">
            This website is provided <strong>"as-is" and "as available"</strong> with
            no warranties of any kind. We do not guarantee uninterrupted access,
            accuracy of content, or freedom from errors or harmful components.
          </p>
        </section>

        {/* ================================
              LIMITATION OF LIABILITY
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p className="mb-4">
            Burak Group, Rhosigma Engineering & Automation Pvt Ltd, Sovorun, and
            affiliated partners are not liable for damages arising from use or
            inability to use this website, including:
          </p>

          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Direct or indirect damages</li>
            <li>Loss of profits or data</li>
            <li>Third-party content</li>
            <li>External links or third-party sites</li>
          </ul>
        </section>

        {/* ================================
              GOVERNING LAW
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">7. Governing Law</h2>
          <p className="mb-4">
            These terms are governed by the laws of{" "}
            <strong>Thane, Maharashtra, India</strong>. Any disputes shall be handled
            exclusively in the courts located in Thane.
          </p>
        </section>

        {/* ================================
              CHANGES TO TERMS
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to update or modify these terms at any time.
            Continued use after updates constitutes acceptance of the new terms.
          </p>
        </section>

        {/* ================================
              THIRD-PARTY LINKS
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">9. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain external links. We do not endorse or control
            third-party content and are not responsible for their practices.
          </p>
        </section>

        {/* ================================
              DISPUTE RESOLUTION
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">10. Dispute Resolution</h2>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Good-faith discussion</li>
            <li>Mediation with a neutral third-party</li>
            <li>
              Binding arbitration at{" "}
              <strong>Thane Arbitration Centre, Maharashtra</strong>
            </li>
          </ul>
        </section>

        {/* ================================
              INDEMNIFICATION
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">11. Indemnification</h2>
          <p className="mb-4">
            Users agree to indemnify and hold harmless Burak Group, its
            subsidiaries, employees, officers, and partners from claims resulting
            from misuse of the website or violation of these terms.
          </p>
        </section>

        {/* ================================
              CONTACT INFORMATION
        ================================= */}
        <section>
          <h2 className="text-xl font-semibold mb-3">12. Contact Information</h2>
          <p className="mb-4">
            For questions regarding these Terms of Service, please contact:
          </p>

          <ul className="space-y-1">
            <li>Email: <Link href="mailto:info@sovorun.com" className="text-blue-600 underline">info@sovorun.com</Link></li>
            <li>Phone: <Link href="tel:+917977907989" className="text-blue-600 underline">+91 79779 07989</Link></li>
            <li>
              Address: 601, VBC, Dawat Hall Bldg., Above Torrent Power,
              Opp. Bharat Gear Ltd., NH48 Highway, Shil, Thane, Maharashtra 400612
            </li>
          </ul>
        </section>
      </div>

      <FaqsForm />
    </section>
  );
}

export default TermsOfServicePage;
