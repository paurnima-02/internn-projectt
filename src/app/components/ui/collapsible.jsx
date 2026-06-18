"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Collapsible({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(CollapsiblePrimitive.Root, {
    "data-slot": "collapsible",
    ...props
  }, void 0, false);
}
function CollapsibleTrigger({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(CollapsiblePrimitive.CollapsibleTrigger, {
    "data-slot": "collapsible-trigger",
    ...props
  }, void 0, false);
}
function CollapsibleContent({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(CollapsiblePrimitive.CollapsibleContent, {
    "data-slot": "collapsible-content",
    ...props
  }, void 0, false);
}
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
