import { useState } from "react";
import { Loader2 } from "lucide-react";

function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-white">
      {/* Spinner will be absolutely positioned in the center */}
      {!isLoaded && (
        <div className="absolute flex justify-center items-center animate-spin">
          <Loader2 className="w-12 h-12" style={{ color: '#999999' }} />
        </div>
      )}

      {/* The iframe with a subtle fade-in effect */}
      <iframe
        src="https://airtable.com/embed/appXGGahffdQcOP2N/pageLnc3yGEKzg7Ke/form"
        width="100%"
        height="600"
        loading="lazy"
        onLoad={handleIframeLoad}
        style={{
          opacity: isLoaded ? 1 : 0, // opacity change
          transition: "opacity 0.3s ease-out", // subtle fade-in transition
        }}
      />
    </div>
  );
}

export default Contact;