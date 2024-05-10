import Cookies from "js-cookie";

export default async function getSector() {
  const getSectorURL = import.meta.env.VITE_REACT_APP_GET_SECTOR_URL;

  try {
    const response = await fetch(getSectorURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}
