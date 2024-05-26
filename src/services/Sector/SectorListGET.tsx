import Cookies from "js-cookie";

export default async function SectorListGET(page = 0, size = 10) {
  const SectorListURL =
    import.meta.env.VITE_REACT_APP_GET_SECTOR_URL + `?page=${page}&size=${size}`;

  try {
    const response = await fetch(SectorListURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
    });

    const data = await response.json();

    return {
      content: data.content,
      totalElements: data.totalElements,
    };
  } catch (error) {
    throw error;
  }
}
