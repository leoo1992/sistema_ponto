import Cookies from "js-cookie";

const data = [
  { id: "DEV", name: "Dev" },
  { id: "FRONT", name: "Front" },
  { id: "BACK", name: "Back" },
];

export default async function getPosition() {
  const getPositionURL = import.meta.env.VITE_REACT_APP_GET_POSITION_URL;

  try {
    const response = await fetch(getPositionURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // const data = await response.json();


    return data;
  } catch (error) {
    // throw error;
    return data;
  }
}
