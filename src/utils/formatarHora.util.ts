export function formatHora(date: Date) {
  const horas = date.getHours().toString().padStart(2, '0');
  const minutos = date.getMinutes().toString().padStart(2, '0');
  const segundos = date.getSeconds().toString().padStart(2, '0');
  return `${horas}:${minutos}:${segundos}`;
}
