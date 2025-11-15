"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqsForm from "../Common/FaqsForm";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { FaqProp } from "@/types/Interface";
import axios from "axios";
function PageFaqsSection() {
  const [isOpenId, setOpenId] = useState<string>();
  const [faqs, setFaqs] = useState<FaqProp[]>([]);
  async function FetchFaqs() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/faqs`);
      console.log(response.data, "faqs data");
      setFaqs(response.data.faqs);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    FetchFaqs();
  }, []);
  return (
    <section className="w-full relative h-auto pb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 logistics-container">
      <div className="w-full relative h-auto  xl:col-span-2">
        <Accordion type="single" collapsible>
          {faqs.map((item, index) => (
            <AccordionItem
              value={`item-${index}`}
              className="border-b border-hover-section"
              key={index}
            >
              <AccordionTrigger
                className={`text-base font-medium cursor-pointer py-4 px-2 ${
                  isOpenId == `item-${index}`
                    ? "bg-primary text-white"
                    : "bg-white text-text-secondary"
                }`}
                onClick={() => setOpenId(`item-${index}`)}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base font-medium text-text-secondary  p-3 ">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}

         
        </Accordion>
      </div>
      <FaqsForm />
    </section>
  );
}

export default PageFaqsSection;
