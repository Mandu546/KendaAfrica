import { useEffect, useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] =
    useState([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "kendaafrica-favorites"
      );

    if (saved) {
      setFavorites(
        JSON.parse(saved)
      );
    }
  }, []);

  const saveFavorites = (
    updated
  ) => {
    setFavorites(updated);

    localStorage.setItem(
      "kendaafrica-favorites",
      JSON.stringify(updated)
    );
  };

  const isFavorite = (
    service
  ) => {
    return favorites.some(
      (item) =>
        item.id === service.id
    );
  };

  const toggleFavorite = (
    service
  ) => {
    if (isFavorite(service)) {
      saveFavorites(
        favorites.filter(
          (item) =>
            item.id !== service.id
        )
      );
    } else {
      saveFavorites([
        ...favorites,
        service,
      ]);
    }
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}