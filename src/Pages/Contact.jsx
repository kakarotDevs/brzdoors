import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [airtableUrl, setAirtableUrl] = useState(null);

  useEffect(() => {
    // Retrieve Airtable URL from localStorage
    const airtableUrls = JSON.parse(localStorage.getItem("airtableUrls"));
    if (airtableUrls && airtableUrls.contactForm) {
      setAirtableUrl(airtableUrls.contactForm);
    } else {
      // Fallback URL if not found in localStorage
      setAirtableUrl(
        "https://airtable.com/embed/appXGGahffdQcOP2N/pageLnc3yGEKzg7Ke/form",
      );
    }
  }, []);

  return (
    <div className="relative h-screen w-full bg-white sm:mt-0 md:mt-8">
      {/* Loader - absolutely centered */}
      {!isLoaded && (
        <div
          className="absolute inset-0 mt-64 flex justify-center md:mt-0 md:items-center"
          aria-live="polite" // Improved accessibility
        >
          <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
        </div>
      )}

      {/* Airtable Form */}
      {airtableUrl && (
        <iframe
          src={airtableUrl}
          width="100%"
          height="600"
          loading="lazy"
          title="Contact Form"
          onLoad={() => setIsLoaded(true)}
          className="transition-opacity duration-300 ease-out"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      )}
    </div>
  );
}

export default Contact;
