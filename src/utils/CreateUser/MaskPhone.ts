export const MaskPhone = (value: any) => {
    const numericValue = value.replace(/\D/g, "").slice(0, 11);
    if (numericValue.length <= 10) {
      return numericValue.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    return numericValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };