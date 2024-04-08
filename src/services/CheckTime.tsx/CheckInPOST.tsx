export default async function CheckInPOST(time: string): Promise<string> {
    const apiUrl = 'URL_DO_BACKEND';

    const response = await fetch(`${apiUrl}/checkIn`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ time }),
    });

    if (!response.ok) {
        throw new Error('Erro ao enviar checkIn');
    }

    const responseData = await response.json();
    return responseData;
}
