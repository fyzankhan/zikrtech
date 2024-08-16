import React, { useState, useEffect } from "react";

const FlashMessage = ({ message, type = "success", duration = 3000 }) => {
  const [visible, setVisible] = useState(!!message);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!visible || !message) return null;

  return (
    <div
      className={`mb-4 p-4 rounded-lg flex justify-between items-center ${
        type === "success"
          ? "text-green-800 bg-green-100"
          : "text-red-800 bg-red-100"
      }`}
    >
      <span>{message}</span>
      <button onClick={() => setVisible(false)} className="ml-4 text-red-500">
        X
      </button>
    </div>
  );
};

export default FlashMessage;
