import React from "react";
import ServicesweOfferCard from "../Cards/ServicesweOfferCard";
import { ProductsWeOfferProps, ServiceWeOfferProps } from "@/types/Interface";
function ServicesWeOffer({ data }: ProductsWeOfferProps) {
  return (
<section className="w-full relative border border-gray-200 logistics-container h-auto grid grid-cols-1 lg:grid-cols-1">


      {data.map((item, index) => (
        <ServicesweOfferCard
          slug={item.slug}
          image={item.image}
          category={item.category}
          categorySlug={item.categorySlug}
          title={item.title}
          subtitle={item.subtitle}
          descrtiption={item.descrtiption}
          direction={item.direction}
          key={index}
          toGoL2Page={true}
          GoL2BtnText={item.title.split(" ").join('-').toLocaleLowerCase()}
        />
      ))}
    </section>
  );
}

export default ServicesWeOffer;
