import { hotels } from "../data/services/hotels";
import { attractions } from "../data/services/attractions";
import { bnbs } from "../data/services/bnbs";
import { emergency } from "../data/services/emergency";

export function getService(
  city,
  category,
  slug
) {

  const services = {
    hotel: hotels,
    attraction: attractions,
    bnb: bnbs,
    emergency: emergency,
  };

  const categoryData =
    services[category];

  if (!categoryData)
    return null;

  return categoryData.find(
    (item) =>
      item.city === city &&
      item.slug === slug
  );
}