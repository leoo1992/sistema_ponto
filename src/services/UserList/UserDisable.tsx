import Cookies from "js-cookie";

export default async function UserDisable(id: any) {
  const idAsNumber = parseInt(id);
  const DisebleUserURL = import.meta.env.VITE_REACT_APP_DISABLE_USER_URL + `${idAsNumber}`;

  try {
    await fetch(DisebleUserURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(idAsNumber),
    });
  } catch (error) {
    throw error;
  }
}
