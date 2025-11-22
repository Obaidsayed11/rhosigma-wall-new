import React, { useState } from "react";
import Image from "next/image";

function WhoWeAre() {
  const data = [{
    id: 1,
    title: "Who We Are",
    content: "Rhosigma is a fast growing company and we focused to provide complete valve automation solution under one roof in pneumatic actuators as well as in electrical actuators with optional function as per client's requirement. We have decade of experience in valve automation and we understand the client's requirement and provide the solution with low budget and high performance quality of valves and automation with guarantee of each products."
  }];

  const [expanded, setExpanded] = useState({});
  
  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full relative logistics-container py-10 gap-10 lg:gap-0 items-center justify-center h-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      <div className="flex flex-col gap-4 lg:px-10 lg:py-10">
        {data && data.map((dat) => (
          <React.Fragment key={dat.id}>
            <h2 className="text-3xl lg:text-4xl font-semibold text-text-secondary">
              {dat.title}
            </h2>
            <div className="text-base lg:text-lg font-medium text-text-secondary">
              <p className={expanded[dat.id] ? '' : 'line-clamp-4 sm:line-clamp-5 md:line-clamp-6 lg:line-clamp-6'}>
                {dat.content}
              </p>
              <button
                onClick={() => toggleExpand(dat.id)}
                className="text-primary hover:text-primary/80 text-sm mt-2 font-medium transition-colors"
              >
                {expanded[dat.id] ? 'Show less' : 'See more...'}
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
      
      <Image 
        src={"/about-image.jpg"} 
        alt="about page image" 
        height={700} 
        width={700} 
        className="w-full xl:col-start-2 xl:col-end-4 relative h-full object-cover max-h-[450px] object-top"
      />
    </section>
  );
}

export default WhoWeAre;