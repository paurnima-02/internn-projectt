import * as React from "react";
import { cn } from "./utils";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Card({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "card",
    className: cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border", className),
    ...props
  }, void 0, false);
}
function CardHeader({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "card-header",
    className: cn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
    ...props
  }, void 0, false);
}
function CardTitle({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("h4", {
    "data-slot": "card-title",
    className: cn("leading-none", className),
    ...props
  }, void 0, false);
}
function CardDescription({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("p", {
    "data-slot": "card-description",
    className: cn("text-muted-foreground", className),
    ...props
  }, void 0, false);
}
function CardAction({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "card-action",
    className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
    ...props
  }, void 0, false);
}
function CardContent({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "card-content",
    className: cn("px-6 [&:last-child]:pb-6", className),
    ...props
  }, void 0, false);
}
function CardFooter({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "card-footer",
    className: cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className),
    ...props
  }, void 0, false);
}
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
