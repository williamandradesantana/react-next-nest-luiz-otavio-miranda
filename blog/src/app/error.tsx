"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RouteErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RouteErrorPage({ error, reset }: RouteErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="500"
      content="Ocorreu um erro do qual nossa aplicação não conseguiu recuperar. Tente novamente mais tarde!"
    />
  );
}
