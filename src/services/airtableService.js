export const getAirtableUrls = () => {
  const airtableUrls = localStorage.getItem("airtableUrls");
  if (airtableUrls) {
    return JSON.parse(airtableUrls);
  }
  return null; // No URLs cached
};

export const setAirtableUrls = () => {
  const urls = {
    contactForm:
      "https://airtable.com/embed/appXGGahffdQcOP2N/pageLnc3yGEKzg7Ke/form",
    doorOrderForm:
      "https://airtable.com/embed/appXGGahffdQcOP2N/pagkxMrXZL93IWmHs/form",
  };

  // Store Airtable URLs in localStorage
  localStorage.setItem("airtableUrls", JSON.stringify(urls));

  // Store the current timestamp when the URLs are set
  localStorage.setItem("airtableUrlsTimestamp", new Date().getTime());
};
