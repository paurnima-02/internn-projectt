import { cn } from "./utils";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
function Skeleton({
  className,
  ...props
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    "data-slot": "skeleton",
    className: cn("bg-accent animate-pulse rounded-md", className),
    ...props
  }, void 0, false);
}
export { Skeleton };
