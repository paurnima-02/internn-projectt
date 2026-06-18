"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "./utils";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Avatar({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AvatarPrimitive.Root, {
    "data-slot": "avatar",
    className: cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }, void 0, false);
}
function AvatarImage({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AvatarPrimitive.Image, {
    "data-slot": "avatar-image",
    className: cn("aspect-square size-full", className),
    ...props
  }, void 0, false);
}
function AvatarFallback({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AvatarPrimitive.Fallback, {
    "data-slot": "avatar-fallback",
    className: cn("bg-muted flex size-full items-center justify-center rounded-full", className),
    ...props
  }, void 0, false);
}
export { Avatar, AvatarImage, AvatarFallback };
