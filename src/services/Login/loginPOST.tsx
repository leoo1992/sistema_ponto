import Cookies from "js-cookie";

export default async function loginPOST({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const Login = "https://pontoapi-production.up.railway.app/api/auth/login";

  Cookies?.remove?.("AuthToken");

  try {
    const resp = await fetch(Login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await resp.json();

    const token = await data.token;
    Cookies.set("Bearer", token);

    return data;
  } catch (error) {
    throw error;
  }
}
