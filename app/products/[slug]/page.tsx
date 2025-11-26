import { notFound } from "next/navigation";
import { productsData } from "@/lib/productsData";
import ProductDetail from "@/components/Common/ProductDetail";

interface PageProps {
  params: {
    categorySlug: string
    slug: string;
  };
}

// Generate static paths for all products
export async function generateStaticParams() {

  return productsData.map((p) => ({
    categorySlug: p.categorySlug,
    slug: p.slug,
  }));
}

// Get product by slug only
function getProductBySlug(slug: string) {
  return productsData.find((p) => p.slug === slug);
}

// Dynamic Metadata for each product page
export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | Rhosigma Valves" };
  }

  return {
    title: `${product.title} | Rhosigma Valves`,
    description: product.description,
    keywords: [
      product.title,
      product.category,
      "Rhosigma Valves",
      "industrial valves",
      "pneumatic actuators",
      "automated valves",
    ],
    openGraph: {
      title: `${product.title} | Rhosigma Valves`,
      description: product.description,
      url: `https://rhosigmavalves.com/products/${slug}`,
      siteName: "Rhosigma Valves",
      images: [
        {
          url: product.images?.[0] || "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: product.images?.[0] || "/opengraph-image.png",
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}