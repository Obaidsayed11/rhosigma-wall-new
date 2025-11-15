import React from "react";
import RealTimeCard from "../Cards/RealTimeCard";
import Button from "../Common/Button";
function Realtimetracking() {
  return (
    <section className="w-full relative h-auto items-center justify-center  flex flex-col gap-10 logistics-container ">
      <div className="w-full relative h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <RealTimeCard image={"/ecommerce-icon.svg"} description={"Live Shipment Location Monitoring via GPS & IoT sensors"} />
        <RealTimeCard image={"/pharma-icon.svg"} description={"Instant Alerts on delays, detours, or delivery milestones"} />
        <RealTimeCard image={"/food-icon.svg"} description={"Dynamic Dashboards for full shipment visibility across your supply chain"} />
        <RealTimeCard image={"/agricultural-icon.svg"} description={"Predictive ETAs based on real-time traffic and weather analytics"} />
        <RealTimeCard image={"/retail-icon.svg"} description={"Cloud-Based Secure Data Sharing for internal teams and customers"} />
      </div>
      <Button
        text={"Get a Quote "}
        css={
          "text-base font-medium w-fit  px-5 py-3 text-primary hover:text-white hover:bg-primary bg-transparent border border-primary "
        }
        isIcons={true}
      />
    </section>
  );
}

export default Realtimetracking;
