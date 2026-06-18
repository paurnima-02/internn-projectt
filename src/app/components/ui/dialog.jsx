"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "./utils";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Dialog({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(DialogPrimitive.Root, {
    "data-slot": "dialog",
    ...props
  }, void 0, false);
}
function DialogTrigger({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(DialogPrimitive.Trigger, {
    "data-slot": "dialog-trigger",
    ...props
  }, void 0, false);
}
function DialogPortal({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(DialogPrimitive.Portal, {
    "data-slot": "dialog-portal",
    ...props
  }, void 0, false);
}
function DialogClose({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(DialogPrimitive.Close, {
    "data-slot": "dialog-close",
    ...props
  }, void 0, false);
}
function DialogOverlay({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(DialogPrimitive.Overlay, {
    "data-slot": "dialog-overlay",
    className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
    ...props
  }, void 0, false);
}
function DialogContent({
  className,
  children,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(DialogPortal, {
    "data-slot": "dialog-portal",
    children: [/*#__PURE__*/_jsxDEV(DialogOverlay, {}, void 0, false), /*#__PURE__*/_jsxDEV(DialogPrimitive.Content, {
      "data-slot": "dialog-content",
      className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
      ...props,
      children: [children, /*#__PURE__*/_jsxDEV(DialogPrimitive.Close, {
        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        children: [/*#__PURE__*/_jsxDEV(XIcon, {}, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "sr-only",
          children: "Close"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
function DialogHeader({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "dialog-header",
    className: cn("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  }, void 0, false);
}
function DialogFooter({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "dialog-footer",
    className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  }, void 0, false);
}
function DialogTitle({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(DialogPrimitive.Title, {
    "data-slot": "dialog-title",
    className: cn("text-lg leading-none font-semibold", className),
    ...props
  }, void 0, false);
}
function DialogDescription({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(DialogPrimitive.Description, {
    "data-slot": "dialog-description",
    className: cn("text-muted-foreground text-sm", className),
    ...props
  }, void 0, false);
}
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger };
