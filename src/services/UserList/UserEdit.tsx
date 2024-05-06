import Cookies from "js-cookie";

export default async function UserEdit(id: any) {
  const idAsNumber = parseInt(id, 10);
  const EditUser = `https://pontoapi-production.up.railway.app/api/v1/update/${idAsNumber}`;

  try {
    await fetch(EditUser, {
      method: "PUT",
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
