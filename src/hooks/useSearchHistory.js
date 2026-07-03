import { useEffect, useState } from "react";

export default function useSearchHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "kendaafrica-search-history"
      );

    if (saved) {
      setHistory(
        JSON.parse(saved)
      );
    }
  }, []);

  const addSearch = (term) => {
    if (!term) return;

    const updated = [
      term,
      ...history.filter(
        (item) => item !== term
      ),
    ].slice(0, 8);

    setHistory(updated);

    localStorage.setItem(
      "kendaafrica-search-history",
      JSON.stringify(updated)
    );
  };

  const clearHistory = () => {
    setHistory([]);

    localStorage.removeItem(
      "kendaafrica-search-history"
    );
  };

  return {
    history,
    addSearch,
    clearHistory,
  };
}