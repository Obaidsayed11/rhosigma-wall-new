import React from "react";
import FaqsForm from "@/components/Common/FaqsForm";

function QualityPolicyPage() {
  return (
    <section className="w-full relative py-10 logistics-container grid grid-cols-3 gap-5">
      <div className="px-4 md:px-16 max-w-4xl mx-auto text-gray-800 col-span-2">
        
        <h1 className="text-3xl font-bold mb-6 text-primary">Quality Policy</h1>
        <p className="mb-6 text-gray-600">
          Our commitment to quality is at the core of everything we do. Groactix
          follows strict standards to ensure excellence in every product,
          service, and customer interaction.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-primary">Our Commitment</h2>
          <p className="text-gray-700">
            We deliver solutions that meet and exceed customer expectations while
            maintaining the highest level of professionalism, safety, and
            reliability.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-primary">Quality Objectives</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Ensure 100% customer satisfaction</li>
            <li>Maintain consistent product and service quality</li>
            <li>Continuously improve operational efficiency</li>
            <li>Follow industry standards, statutory norms, and safety guidelines</li>
            <li>Encourage innovation and employee skill development</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-primary">Quality Assurance Practices</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Regular internal quality audits</li>
            <li>Vendor and material quality checks</li>
            <li>Strict documentation and compliance processes</li>
            <li>Customer feedback evaluation and corrective actions</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-primary">Continuous Improvement</h2>
          <p className="text-gray-700">
            Groactix embraces continuous improvement practices to enhance product
            performance, optimize processes, and ensure long-term customer trust.
          </p>
        </section>

        <p className="mt-8 font-semibold text-primary">
          — Groactix Management Team
        </p>
      </div>

      <FaqsForm />
    </section>
  );
}

export default QualityPolicyPage;
