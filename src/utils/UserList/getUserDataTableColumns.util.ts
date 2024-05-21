export const getUserDataTableColumns = [
  {
    name: "Id",
    selector: (row: any) => {
      if (row.id === null || row.id === undefined) return "Não definido";
      return row.id;
    },
    sortable: true,
    width: "60px",
  },
  {
    name: "Nome",
    selector: (row: any) => {
      if (!row.name) return "Não definido";
      return row.name;
    },
    sortable: true,
    flex: 1,
  },
  {
    name: "Email",
    selector: (row: any) => {
      if (!row.email) return "Não definido";
      return row.email;
    },
    sortable: true,
    flex: 1,
  },
  {
    name: "CPF",
    selector: (row: any) => {
      if (!row.cpf) return "Não definido";
      return row.cpf;
    },
    sortable: true,
    width: "140px",
  },
  {
    name: "Cargo",
    selector: (row: any) => {
      if (!row.position) return "Não definido";
      return row.position.name;
    },
    sortable: true,
    width: "140px",
  },
  {
    name: "Setor",
    selector: (row: any) => {
      if (!row.sector) return "Não definido";
      return row.sector.name;
    },
    sortable: true,
    width: "140px",
  },
  {
    name: "Telefone",
    selector: (row: any) => {
      if (!row.telefone) return "Não definido";
      return row.telefone;
    },
    sortable: true,
    width: "140px",
  },
  {
    name: "Permissão",
    selector: (row: any) => {
      if (!row.permissions || row.permissions.length === 0) return "Não definido";
      const campo =  row.permissions[0].name;
      const lowercaseRole = campo.toLowerCase();
      const convert = lowercaseRole.charAt(0).toUpperCase() + lowercaseRole.slice(1);
      return convert;
    },
    sortable: true,
    width: "140px",
  },
  {
    name: 'Status',
    selector: (row: any) => {
      if (row.status === null || row.status === undefined) return 'Não definido';
      return row.status === true ? 'Ativo' : 'Inativo';
    },
    sortable: true,
    width: '120px',
  },
];
