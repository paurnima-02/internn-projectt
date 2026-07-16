import React, { useState } from 'react';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const ERROR_IMG_SRC = "/assets/sarthidb-logo.png";

export function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);
  const handleError = () => setDidError(true);

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ERROR_IMG_SRC}
          alt="sarthiDB image not found"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  );
}
