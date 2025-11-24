import { notFound } from "next/navigation";
import { getProductByCategoryAndSlug, productsData } from "@/lib/productsData";
import ProductDetail from "@/components/Common/ProductDetail";

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  return productsData.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { category, slug } = await params;
  const product = getProductByCategoryAndSlug(category, slug);

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

export default async function ProductPage({ params }: PageProps) {
  const { category, slug } = await params;
  const product = getProductByCategoryAndSlug(category, slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}