"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import { cn } from "./utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Command({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(CommandPrimitive, {
    "data-slot": "command",
    className: cn("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className),
    ...props
  }, void 0, false);
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(Dialog, {
    ...props,
    children: [/*#__PURE__*/_jsxDEV(DialogHeader, {
      className: "sr-only",
      children: [/*#__PURE__*/_jsxDEV(DialogTitle, {
        children: title
      }, void 0, false), /*#__PURE__*/_jsxDEV(DialogDescription, {
        children: description
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV(DialogContent, {
      className: "overflow-hidden p-0",
      children: /*#__PURE__*/_jsxDEV(Command, {
        className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
        children: children
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}
function CommandInput({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "command-input-wrapper",
    className: "flex h-9 items-center gap-2 border-b px-3",
    children: [/*#__PURE__*/_jsxDEV(SearchIcon, {
      className: "size-4 shrink-0 opacity-50"
    }, void 0, false), /*#__PURE__*/_jsxDEV(CommandPrimitive.Input, {
      "data-slot": "command-input",
      className: cn("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
      ...props
    }, void 0, false)]
  }, void 0, true);
}
function CommandList({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(CommandPrimitive.List, {
    "data-slot": "command-list",
    className: cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
    ...props
  }, void 0, false);
}
function CommandEmpty({
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(CommandPrimitive.Empty, {
    "data-slot": "command-empty",
    className: "py-6 text-center text-sm",
    ...props
  }, void 0, false);
}
function CommandGroup({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(CommandPrimitive.Group, {
    "data-slot": "command-group",
    className: cn("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className),
    ...props
  }, void 0, false);
}
function CommandSeparator({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(CommandPrimitive.Separator, {
    "data-slot": "command-separator",
    className: cn("bg-border -mx-1 h-px", className),
    ...props
  }, void 0, false);
}
function CommandItem({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV(CommandPrimitive.Item, {
    "data-slot": "command-item",
    className: cn("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
    ...props
  }, void 0, false);
}
function CommandShortcut({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("span", {
    "data-slot": "command-shortcut",
    className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className),
    ...props
  }, void 0, false);
}
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator };
