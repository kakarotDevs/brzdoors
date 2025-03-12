import React, { useState, useEffect } from "react";
import { Loader2, X } from "lucide-react"; // Importing Lucide's X icon

const Modal = ({ isOpen, onClose, url }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeStartLoading = () => {
    setIsLoading(true); // Reset loading state whenever the iframe is about to load
  };

  // Close modal when Esc key is pressed
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  // Add event listener when the modal is open
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Reset the loading state when the modal is closed or the URL changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true); // Reset loading when modal is opened
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ease-in-out">
      <div className="relative w-full rounded-lg bg-white p-8 shadow-lg md:w-4/5 lg:w-2/3">
        {/* Minimalistic Close Button (Top Left) */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-60 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <X className="h-5 w-5 text-gray-600 hover:text-gray-800" />
        </button>

        {/* Spinner while iframe is loading */}
        {isLoading && (
          <div className="bg-opacity-70 absolute inset-0 z-50 flex items-center justify-center bg-white">
            <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
          </div>
        )}

        {/* The iframe */}
        <iframe
          src={url}
          width="100%"
          height="500"
          title="Order Form"
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeStartLoading} // Reset loading state if iframe fails to load
          style={{
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease-out",
            borderRadius: "8px",
            visibility: isLoading ? "hidden" : "visible",
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
