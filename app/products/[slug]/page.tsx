import { notFound } from "next/navigation";
import { getProductBySlug, productsData } from "@/lib/productsData";
import ProductDetail from "@/components/Common/ProductDetail";
import SectionWrapper from "@/components/Common/SectionWrapper";
interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all products (for static generation)
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export  function generateMetadata({ params }: PageProps) {
  const product =  getProductBySlug( params?.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | Your Company Name`,
    description: product.description,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
  <SectionWrapper 
    css=""
        title={""}
        description={
          ""
        }
  
  >
<ProductDetail product={product} />

  </SectionWrapper>
  
  );
}