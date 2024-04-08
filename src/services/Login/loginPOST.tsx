
export default async function loginPOST(username: string, password: string): Promise<string> {
    const apiUrl = 'URL_DO_BACKEND';

    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Erro ao fazer login');
    }

    const responseData = await response.json();
    return responseData.token;
}
