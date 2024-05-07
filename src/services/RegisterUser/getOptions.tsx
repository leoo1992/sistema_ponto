import Cookies from "js-cookie";

const data = [
  { id: "ADMINISTRADOR", name: "Administrador" },
  { id: "COLABORADOR", name: "Colaborador" },
  { id: "GESTOR", name: "Gestor" },
];

export default async function getOptions() {
  const getOptionsURL = import.meta.env.VITE_REACT_APP_GET_OPITION_URL;

  try {
    const response = await fetch(getOptionsURL, {
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
