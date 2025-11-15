import React from "react";
import {  WhyLogisticsProps } from "@/types/Interface";
import WhyChooseCard from "../Cards/WhyChooseCard";
import Button from "../Common/Button";

function WhyLogistics({ isQuotebtn }: WhyLogisticsProps) {
  return (
    <section className="w-full relative flex flex-col items-center justify-center">
      <section className="w-full relative h-auto flex flex-col  logistics-container">
        <div className="w-full relative h-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <WhyChooseCard
            image={"/real-time-icon.svg"}
            title={"Real-Time Tracking"}
            description={
              "Stay informed every step of the way with live tracking and instant updates—transparency you can trust."
            }
            css="flex-col items-start justify-start gap-1"
            descriptioncss="text-primary"
            subtitle="Fast, Flexible, and Fulfillment-Focused"
            subtitlecss="text-primary"
          />
          <WhyChooseCard
            image={"/cost-effective.svg"}
            title={"Cost-Effective Solutions"}
            description={
              "Optimized routes and smart logistics keep your costs low while maintaining top-tier service quality."
            }
            css="flex-col items-start justify-start gap-1"
            descriptioncss="text-primary"
            subtitle="Fast, Flexible, and Fulfillment-Focused"
            subtitlecss="text-primary"
          />

          <div className="w-full relative h-auto md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4">
            <WhyChooseCard
              image={"/cost-effective.svg"}
              title={"Cost-Effective Solutions"}
              description={
                "Optimized routes and smart logistics keep your costs low while maintaining top-tier service quality."
              }
              css="flex-col items-start justify-start gap-1"
              descriptioncss="text-primary"
              subtitle="Fast, Flexible, and Fulfillment-Focused"
              subtitlecss="text-primary"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full relative h-auto ">
          <WhyChooseCard
            image={"/pan-india.svg"}
            title={"Pan-India Reach"}
            description={
              "From bustling cities to remote regions, our extensive network ensures reliable delivery across the nation."
            }
            css="flex-col items-start justify-start gap-1"
            descriptioncss="text-primary"
            subtitle="Fast, Flexible, and Fulfillment-Focused"
            subtitlecss="text-primary"
          />

          <WhyChooseCard
            image={"/customer-care.svg"}
            title={"Customer-Centric Approach"}
            description={
              "We tailor our services to your unique needs, with dedicated support and flexible solutions designed around your business."
            }
            css="flex-col items-start justify-start gap-1"
            descriptioncss="text-primary"
            subtitle="Fast, Flexible, and Fulfillment-Focused"
            subtitlecss="text-primary"
          />
        </div>
      </section>
      {isQuotebtn && (
        <Button
          css=" px-2 lg:px-3 mt-5 md:mt-10 py-1 lg:py-2 border border-primary font-medium cursor-pointer text-primary hover:bg-primary hover:text-white "
          text="Get a Quote"
          isIcons={true}
        />
      )}
    </section>
  );
}

export default WhyLogistics;
