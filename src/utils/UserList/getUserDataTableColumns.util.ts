export const getUserDataTableColumns = [
  {
    name: 'Id',
    selector: (row: any) => {
      if (row.id_user === null || row.id_user === undefined) return 'Sem ID';
      return row.id_user;
    },
    sortable: true,
    reorder: true,
    width: '90px',
  },
  {
    name: 'Nome',
    selector: (row: any) => {
      if (!row.name) return 'Sem Nome';
      return row.name;
    },
    sortable: true,
    reorder: true,
    width: '200px',
  },
  {
    name: 'Email',
    selector: (row: any) => {
      if (!row.email) return 'Sem Email';
      return row.email;
    },
    sortable: true,
    reorder: true,
    width: '200px',
  },
  {
    name: 'Cargo',
    selector: (row: any) => {
      if (!row.jobfunction) return 'Sem Cargo';
      return row.jobfunction;
    },
    sortable: true,
    reorder: true,
    width: '140px',
  },
  {
    name: 'Telefone',
    selector: (row: any) => {
      if (!row.telefone) return 'Sem Telefone';
      return row.telefone;
    },
    sortable: true,
    reorder: true,
    width: '120px',
  },
  {
    name: 'Tipo',
    selector: (row: any) => {
      const userRole = row.userRole;
      if (!userRole) return 'Sem Tipo';
      const lowercaseRole = userRole.toLowerCase();
      return lowercaseRole.charAt(0).toUpperCase() + lowercaseRole.slice(1);
    },
    sortable: true,
    reorder: true,
    width: '115px',
  },
  {
    name: 'Status',
    selector: (row: any) => {
      if (row.status === null || row.status === undefined) return 'Sem Status';
      return row.status === true ? 'Ativo' : 'Inativo';
    },
    sortable: true,
    reorder: true,
    width: '100px',
  },
];
