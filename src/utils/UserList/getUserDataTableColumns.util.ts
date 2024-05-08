export const getUserDataTableColumns = [
  {
    name: "Id",
    selector: (row: any) => {
      if (row.id === null || row.id === undefined) return "Sem ID";
      return row.id;
    },
    sortable: true,
    width: "60px",
  },
  {
    name: "Nome",
    selector: (row: any) => {
      if (!row.name) return "Sem Nome";
      return row.name;
    },
    sortable: true,
    flex: 1,
  },
  {
    name: "Email",
    selector: (row: any) => {
      if (!row.email) return "Sem Email";
      return row.email;
    },
    sortable: true,
    flex: 1,
  },
  {
    name: "CPF",
    selector: (row: any) => {
      if (!row.cpf) return "Sem cpf";
      return row.cpf;
    },
    sortable: true,
    width: "140px",
  },
  {
    name: "Cargo",
    selector: (row: any) => {
      if (!row.position) return "Sem Cargo";
      return row.position;
    },
    sortable: true,
    width: "140px",
  },
  {
    name: "Setor",
    selector: (row: any) => {
      if (!row.sector) return "Sem Setor";
      return row.sector;
    },
    sortable: true,
    width: "140px",
  },
  {
    name: "Telefone",
    selector: (row: any) => {
      if (!row.telefone) return "Sem Telefone";
      return row.telefone;
    },
    sortable: true,
    width: "140px",
  },
  {
    name: "Tipo",
    selector: (row: any) => {
      const userRole = row.userRole;
      if (!userRole) return "Sem Tipo";
      const lowercaseRole = userRole.toLowerCase();
      return lowercaseRole.charAt(0).toUpperCase() + lowercaseRole.slice(1);
    },
    sortable: true,
    width: "140px",
  },
  // {
  //   name: 'Status',
  //   selector: (row: any) => {
  //     if (row.status === null || row.status === undefined) return 'Sem Status';
  //     return row.status === true ? 'Ativo' : 'Inativo';
  //   },
  //   sortable: true,
  //   width: '120px',
  // },
];
