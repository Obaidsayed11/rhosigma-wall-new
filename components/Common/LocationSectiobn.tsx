import React from "react";

function LocationSectiobn() {
  return (
    <section className="w-full   relative h-auto gap-10 items-center justify-center ">
      
      <div className="w-full relative ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1120.4928983725351!2d73.03085720507221!3d19.156998664183583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1746707482331!5m2!1sen!2sin"
          width={"100%"}
          height={400}
          loading="lazy"
        ></iframe>
      </div>

 
    </section>
  );
}


    //  <div className="flex flex-col gap-2.5 ">
    //     <p className="text-base font-semibold text-text-secondary">
    //       Our Location
    //     </p>
    //     <h2 className=" text-2xl lg:text-3xl font-semibold text-text-secondary ">
    //       Connecting Near & Far
    //     </h2>
    //     <p className="text-lg font-semibold text-text-secondary">
    //       Headquarters
    //     </p>

    //     <p className="text-base font-medium text-text-secondary">
    //       602/B, VBC, Opp. Bharat Gears Ltd. <br /> Mumbra,Maharashtra 400612
    //       India
    //     </p>
    //   </div>
export default LocationSectiobn;
