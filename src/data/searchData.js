import cities from "./cities";
import { hotels } from "./services/hotels";

const searchData = [
  ...cities,
  ...hotels,
];

export default searchData;