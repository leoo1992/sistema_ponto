import Cookies from "js-cookie";

export default async function UserDelete(data: any) {
  console.log(data);

  const id = parseInt(data);
  const DeleteUser = `https://pontoapi-production.up.railway.app/api/v1/delete/${id}`;

  try {
    await fetch(DeleteUser, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(id),
    });
  } catch (error) {
    throw error;
  }
}
