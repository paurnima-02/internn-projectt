"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "./utils";
import { buttonVariants } from "./button";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function AlertDialog({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AlertDialogPrimitive.Root, {
    "data-slot": "alert-dialog",
    ...props
  }, void 0, false);
}
function AlertDialogTrigger({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AlertDialogPrimitive.Trigger, {
    "data-slot": "alert-dialog-trigger",
    ...props
  }, void 0, false);
}
function AlertDialogPortal({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AlertDialogPrimitive.Portal, {
    "data-slot": "alert-dialog-portal",
    ...props
  }, void 0, false);
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AlertDialogPrimitive.Overlay, {
    "data-slot": "alert-dialog-overlay",
    className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
    ...props
  }, void 0, false);
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AlertDialogPortal, {
    children: [/*#__PURE__*/_jsxDEV(AlertDialogOverlay, {}, void 0, false), /*#__PURE__*/_jsxDEV(AlertDialogPrimitive.Content, {
      "data-slot": "alert-dialog-content",
      className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
      ...props
    }, void 0, false)]
  }, void 0, true);
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "alert-dialog-header",
    className: cn("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  }, void 0, false);
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "alert-dialog-footer",
    className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  }, void 0, false);
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AlertDialogPrimitive.Title, {
    "data-slot": "alert-dialog-title",
    className: cn("text-lg font-semibold", className),
    ...props
  }, void 0, false);
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AlertDialogPrimitive.Description, {
    "data-slot": "alert-dialog-description",
    className: cn("text-muted-foreground text-sm", className),
    ...props
  }, void 0, false);
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AlertDialogPrimitive.Action, {
    className: cn(buttonVariants(), className),
    ...props
  }, void 0, false);
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(AlertDialogPrimitive.Cancel, {
    className: cn(buttonVariants({
      variant: "outline"
    }), className),
    ...props
  }, void 0, false);
}
export { AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel };
