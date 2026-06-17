"use client";

import * as React from "react";
import { cn } from "./utils";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Table({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: /*#__PURE__*/_jsxDEV("table", {
      "data-slot": "table",
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    }, void 0, false)
  }, void 0, false);
}
function TableHeader({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("thead", {
    "data-slot": "table-header",
    className: cn("[&_tr]:border-b", className),
    ...props
  }, void 0, false);
}
function TableBody({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("tbody", {
    "data-slot": "table-body",
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }, void 0, false);
}
function TableFooter({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("tfoot", {
    "data-slot": "table-footer",
    className: cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
    ...props
  }, void 0, false);
}
function TableRow({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("tr", {
    "data-slot": "table-row",
    className: cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
    ...props
  }, void 0, false);
}
function TableHead({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("th", {
    "data-slot": "table-head",
    className: cn("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  }, void 0, false);
}
function TableCell({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("td", {
    "data-slot": "table-cell",
    className: cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  }, void 0, false);
}
function TableCaption({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("caption", {
    "data-slot": "table-caption",
    className: cn("text-muted-foreground mt-4 text-sm", className),
    ...props
  }, void 0, false);
}
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
