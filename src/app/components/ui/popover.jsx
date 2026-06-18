"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "./utils";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Popover({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(PopoverPrimitive.Root, {
    "data-slot": "popover",
    ...props
  }, void 0, false);
}
function PopoverTrigger({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(PopoverPrimitive.Trigger, {
    "data-slot": "popover-trigger",
    ...props
  }, void 0, false);
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(PopoverPrimitive.Portal, {
    children: /*#__PURE__*/_jsxDEV(PopoverPrimitive.Content, {
      "data-slot": "popover-content",
      align: align,
      sideOffset: sideOffset,
      className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className),
      ...props
    }, void 0, false)
  }, void 0, false);
}
function PopoverAnchor({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(PopoverPrimitive.Anchor, {
    "data-slot": "popover-anchor",
    ...props
  }, void 0, false);
}
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
