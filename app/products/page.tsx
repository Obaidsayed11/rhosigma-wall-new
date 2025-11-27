import { productsData } from "@/lib/productsData";
import AllProductsList from "@/components/Common/AllProductsList";

export const metadata = {
  title: "Products | Rhosigma Valves",
  description: "Explore our complete range of valve automation products including pneumatic actuators, electric actuators, and industrial valve solutions.",
  keywords: ["valve automation", "pneumatic actuators", "electric actuators", "industrial valves", "Rhosigma"],
};

export default function ProductsPage() {
  // Group products by category
  const groupedProducts = productsData.reduce((acc: any, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  console.log(groupedProducts,"grouped")

  return <AllProductsList groupedProducts={groupedProducts} />;
}