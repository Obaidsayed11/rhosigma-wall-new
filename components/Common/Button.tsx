import React from "react";

import { LuArrowUpRight } from "react-icons/lu";
import { CustomButton } from "@/types/Interface";
import Model from "./Model";

function Button({ css, text, isIcons }: CustomButton) {
  return (
    <Model>
      <span className={` flex cursor-pointer items-center justify-center gap-1.5 ${css} `}>
        {text}
        {isIcons && <LuArrowUpRight className="text-[20px]" />}
      </span>
    </Model>
  );
}

export default Button;
