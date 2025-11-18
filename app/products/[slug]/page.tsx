"use client";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const params = useSearchParams();
  const product = params.get("item"); // gives rhosigma-actuators

  return (
    <div className="text-white p-10">
      <h1 className="text-3xl font-bold">Product Details</h1>

      {product === "rhosigma-acutators" && (
        <p>Showing details for Rhosigma Actuators</p>
      )}

      {product === "electric-acutator" && (
        <p>Showing details for Electric Actuator</p>
      )}

      {product === "motorized-valve" && (
        <p>Details for Motorized Valve</p>
      )}

      {/* You can add more */}
    </div>
  );
}
