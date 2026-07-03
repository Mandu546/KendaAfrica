import { useEffect, useState } from "react";

export default function useRecent() {
  const [recent, setRecent] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "kendaafrica-recent"
        )
      ) || [];

    setRecent(saved);
  }, []);

  const addRecent = (
    service
  ) => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "kendaafrica-recent"
        )
      ) || [];

    const filtered =
      saved.filter(
        item =>
          item.slug !==
          service.slug
      );

    const updated = [
      service,
      ...filtered,
    ].slice(0, 10);

    localStorage.setItem(
      "kendaafrica-recent",
      JSON.stringify(updated)
    );

    setRecent(updated);
  };

  return {
    recent,
    addRecent,
  };
}