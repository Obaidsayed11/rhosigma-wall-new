import React from "react";
import FaqsForm from "../Common/FaqsForm";
import Link from "next/link";

function PrivacyPolicyPage() {
  return (
    <section className="w-full relative py-10 h-auto logistics-container grid grid-cols-3 gap-5">
      <div className="px-4 md:px-16  max-w-4xl mx-auto text-gray-800 col-span-2">
        <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-600">
          Effective Date: 24 July 2024
        </p>
        <p className="mb-6">
          Groactix is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website groactix.com or use our services. Please
          read this policy carefully to understand our practices regarding your
          information.
        </p>

        <section title="1. Information We Collect">
          <p className="mb-2">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Personal Information</strong>: Name, Email address, Phone
              number, Billing and shipping address
            </li>
            <li>
              <strong>Non-Personal Information</strong>: Browser name and
              version, IP address, Device type
            </li>
            <li>Cookies and tracking data</li>
          </ul>
        </section>

        <section title="2. How We Use Your Information">
          <p className="mb-2">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and improve our services</li>
            <li>To process transactions and deliver products/services</li>
            <li>To communicate with you (e.g. updates, promotional offers)</li>
            <li>To analyze usage trends and enhance user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section title="3. Sharing Your Information">
          <p>
            We do not sell or rent your personal information. However, we may
            share your information with:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Service Providers</strong>: Third-party vendors who assist
              in delivering our services (e.g., payment processors, shipping
              companies).
            </li>
            <li>
              <strong>Legal Authorities</strong>: Where required by law or to
              protect our legal rights.
            </li>
          </ul>
        </section>

        <section title="4. Cookies and Tracking Technologies">
          <p>
            We use cookies to enhance your browsing experience. These may
            include:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Session cookies</strong>: To maintain your session
            </li>
            <li>
              <strong>Analytics cookies</strong>: To track site usage and
              improve functionality
            </li>
          </ul>
          <p className="mt-2">
            You can control cookie settings in your browser preferences.
          </p>
        </section>

        <section title="5. Data Security">
          <p>
            We implement appropriate technical and organizational measures to
            protect your data against unauthorized access, loss, or misuse.
            However, no system is completely secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section title="6. Your Rights">
          <p>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Access</strong>: Request a copy of the data we hold about
              you
            </li>
            <li>
              <strong>Correction</strong>: Request correction of incorrect or
              incomplete data
            </li>
            <li>
              <strong>Deletion</strong>: Request deletion of your data, where
              applicable
            </li>
            <li>
              <strong>Opt-out</strong>: Unsubscribe from marketing
              communications at any time
            </li>
          </ul>
        </section>

        <section title="7. Third-Party Links">
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these websites and
            encourage you to review their policies.
          </p>
        </section>

        <section title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </section>

        <section title="9. Contact Us">
          <p>
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us:
          </p>
          <ul className="mt-2">
            <li>
              Email:{" "}
              <Link
                href="mailto:sales@lanjekarlogistics.com"
                className="text-blue-600 underline"
              >
               sales@lanjekarlogistics.com
              </Link>
            </li>
            <Link href={"tel:(+91)  8655587403"}>Phone: (+91)  8655587403</Link>
          </ul>
        </section>
      </div>
      <FaqsForm/>
    </section>
  );
}

export default PrivacyPolicyPage;
