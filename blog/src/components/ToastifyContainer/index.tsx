"use client";

import { Bounce, ToastContainer } from "react-toastify";

export function ToasTifyContainer() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
}
