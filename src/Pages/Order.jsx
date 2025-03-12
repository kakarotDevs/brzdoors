import React, { useState } from "react";
import Modal from "../Components/Modal";

const Order = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(null);

  const openModal = (url) => {
    setIframeUrl(url); // Set the iframe URL
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIframeUrl(null); // Reset iframe URL when closing the modal
  };

  return (
    <div className="flex flex-col items-start pt-10">
      <main className="mx-auto max-w-[800px] flex-1 p-6 md:p-12">
        <h1 className="mt-12 mb-6 text-5xl leading-tight">Place Your Order</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <button
            onClick={() =>
              openModal(
                "https://airtable.com/embed/appXGGahffdQcOP2N/pagkxMrXZL93IWmHs/form",
              )
            }
            className="rounded bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600"
          >
            Door Order Form
          </button>
          <button
            onClick={() =>
              openModal(
                "https://airtable.com/embed/appXGGahffdQcOP2N/pageLnc3yGEKzg7Ke/form",
              )
            }
            className="rounded bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600"
          >
            Product 2
          </button>
          <button
            onClick={() =>
              openModal(
                "https://airtable.com/embed/appXGGahffdQcOP2N/pageLnc3yGEKzg7Ke/form",
              )
            }
            className="rounded bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600"
          >
            Product 3
          </button>
        </div>
      </main>

      {/* Force remount of Modal by adding `key` */}
      <Modal
        key={iframeUrl}
        isOpen={isModalOpen}
        onClose={closeModal}
        url={iframeUrl}
      />
    </div>
  );
};

export default Order;
