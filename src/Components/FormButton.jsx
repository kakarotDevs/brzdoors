import React from "react";

const FormButton = ({ label, url, openModal }) => (
  <button
    type="button"
    onClick={() => openModal(url)}
    className="rounded bg-blue-500 px-4 py-2 text-white shadow transition-all duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
    aria-label={`Open ${label}`}
  >
    {label}
  </button>
);

export default FormButton;
