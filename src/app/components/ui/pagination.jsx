import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { cn } from "./utils";
import { Button, buttonVariants } from "./button";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Pagination({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("nav", {
    role: "navigation",
    "aria-label": "pagination",
    "data-slot": "pagination",
    className: cn("mx-auto flex w-full justify-center", className),
    ...props
  }, void 0, false);
}
function PaginationContent({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("ul", {
    "data-slot": "pagination-content",
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }, void 0, false);
}
function PaginationItem({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("li", {
    "data-slot": "pagination-item",
    ...props
  }, void 0, false);
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("a", {
    "aria-current": isActive ? "page" : undefined,
    "data-slot": "pagination-link",
    "data-active": isActive,
    className: cn(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size
    }), className),
    ...props
  }, void 0, false);
}
function PaginationPrevious({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(PaginationLink, {
    "aria-label": "Go to previous page",
    size: "default",
    className: cn("gap-1 px-2.5 sm:pl-2.5", className),
    ...props,
    children: [/*#__PURE__*/_jsxDEV(ChevronLeftIcon, {}, void 0, false), /*#__PURE__*/_jsxDEV("span", {
      className: "hidden sm:block",
      children: "Previous"
    }, void 0, false)]
  }, void 0, true);
}
function PaginationNext({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(PaginationLink, {
    "aria-label": "Go to next page",
    size: "default",
    className: cn("gap-1 px-2.5 sm:pr-2.5", className),
    ...props,
    children: [/*#__PURE__*/_jsxDEV("span", {
      className: "hidden sm:block",
      children: "Next"
    }, void 0, false), /*#__PURE__*/_jsxDEV(ChevronRightIcon, {}, void 0, false)]
  }, void 0, true);
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("span", {
    "aria-hidden": true,
    "data-slot": "pagination-ellipsis",
    className: cn("flex size-9 items-center justify-center", className),
    ...props,
    children: [/*#__PURE__*/_jsxDEV(MoreHorizontalIcon, {
      className: "size-4"
    }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
      className: "sr-only",
      children: "More pages"
    }, void 0, false)]
  }, void 0, true);
}
export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };
