"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";
import { cn } from "./utils";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function RadioGroup({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(RadioGroupPrimitive.Root, {
    "data-slot": "radio-group",
    className: cn("grid gap-3", className),
    ...props
  }, void 0, false);
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(RadioGroupPrimitive.Item, {
    "data-slot": "radio-group-item",
    className: cn("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
    ...props,
    children: /*#__PURE__*/_jsxDEV(RadioGroupPrimitive.Indicator, {
      "data-slot": "radio-group-indicator",
      className: "relative flex items-center justify-center",
      children: /*#__PURE__*/_jsxDEV(CircleIcon, {
        className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
      }, void 0, false)
    }, void 0, false)
  }, void 0, false);
}
export { RadioGroup, RadioGroupItem };
