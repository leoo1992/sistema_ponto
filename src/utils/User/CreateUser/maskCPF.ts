export const MaskCPF = (value: string) => {
  const numericValue = value.replace(/\D/g, "").slice(0, 11);
  const formattedCPF = numericValue.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4",
  );
  return formattedCPF;
};
