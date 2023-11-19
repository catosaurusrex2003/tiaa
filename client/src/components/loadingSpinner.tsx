import React from "react";

function LoadingSpinner({ size }: { size: number }) {
  return (
    <>
      <style jsx>{`
        .spinner {
          width: ${size}px;
          height: ${size}px;
          border: ${size / 8}px solid #100cd2;
          border-left-color: #7983ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="spinner"></div>
    </>
  );
}

export default LoadingSpinner;
