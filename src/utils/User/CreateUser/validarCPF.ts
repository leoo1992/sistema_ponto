export const validarCPF = (value: string) => {
  if (!value) return true;

  const cpfRegex = /^(\d{3}\.){2}\d{3}-\d{2}$/;
  if (!cpfRegex.test(value)) return false;

  const cpf = value.replace(/\D/g, "");

  if (cpf.split("").every((c) => c === cpf[0])) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
  let remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
  remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(10))) return false;

  return true;
};
