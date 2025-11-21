"use client";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrLinkTop } from "react-icons/gr";
import CatalogueModal from "./CatalogueModal";

function    Catalogue() {
  function ScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
  <div  className="flex items-center gap-2">
Download  Catalogue
  </div>
  );
}

export default Catalogue;
