import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "./utils";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Breadcrumb({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("nav", {
    "aria-label": "breadcrumb",
    "data-slot": "breadcrumb",
    ...props
  }, void 0, false);
}
function BreadcrumbList({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("ol", {
    "data-slot": "breadcrumb-list",
    className: cn("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className),
    ...props
  }, void 0, false);
}
function BreadcrumbItem({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("li", {
    "data-slot": "breadcrumb-item",
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }, void 0, false);
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /*#__PURE__*/_jsxDEV(Comp, {
    "data-slot": "breadcrumb-link",
    className: cn("hover:text-foreground transition-colors", className),
    ...props
  }, void 0, false);
}
function BreadcrumbPage({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("span", {
    "data-slot": "breadcrumb-page",
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn("text-foreground font-normal", className),
    ...props
  }, void 0, false);
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("li", {
    "data-slot": "breadcrumb-separator",
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:size-3.5", className),
    ...props,
    children: children ?? /*#__PURE__*/_jsxDEV(ChevronRight, {}, void 0, false)
  }, void 0, false);
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("span", {
    "data-slot": "breadcrumb-ellipsis",
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex size-9 items-center justify-center", className),
    ...props,
    children: [/*#__PURE__*/_jsxDEV(MoreHorizontal, {
      className: "size-4"
    }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
      className: "sr-only",
      children: "More"
    }, void 0, false)]
  }, void 0, true);
}
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };
