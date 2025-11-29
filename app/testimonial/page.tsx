import React from "react";
import FaqsForm from "@/components/Common/FaqsForm";

function TestimonialPage() {
  const testimonials = [
    {
      name: "Amit Sharma",
      position: "Project Manager, InfraBuild",
      message:
        "Rhosigma delivered exceptional service and professionalism. Their team ensured timely project execution with top-notch quality.",
    },
    {
      name: "Sneha Patel",
      position: "Operations Head, TechNova",
      message:
        "The reliability and support from Rhosigma have been outstanding. We highly recommend their solutions for any automation requirement.",
    },
    {
      name: "Rohit Verma",
      position: "Director, Vertex Engineering",
      message:
        "Their attention to detail and commitment to customer satisfaction is truly commendable. Excellent experience working with them!",
    },
  ];

  return (
    <section className="w-full relative py-10 logistics-container grid grid-cols-3 gap-5">
      <div className="px-4 md:px-16 max-w-4xl mx-auto text-text-secondary col-span-2">
        <h1 className="text-3xl font-bold mb-6 text-primary">Testimonials</h1>
        <p className="mb-6 text-text-secondary">
          Here’s what our clients have to say about working with Groactix.
        </p>

        <div className="space-y-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-5 border border-primary shadow-sm bg-white"
            >
              <p className="italic text-text-secondary mb-4">“{item.message}”</p>
              <h3 className="font-semibold text-primary">{item.name}</h3>
              <p className="text-sm text-text-secondary">{item.position}</p>
            </div>
          ))}
        </div>
      </div>

      <FaqsForm />
    </section>
  );
}

export default TestimonialPage;
