"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "./utils";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(SeparatorPrimitive.Root, {
    "data-slot": "separator-root",
    decorative: decorative,
    orientation: orientation,
    className: cn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
    ...props
  }, void 0, false);
}
export { Separator };
