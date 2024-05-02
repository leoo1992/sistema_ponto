export const getUserDataTableColumns = [
  {
    name: 'Id',
    selector: (row: any) => row.id_user,
    sortable: true,
    reorder: true,
    width: '80px',
  },
  {
    name: 'Nome',
    selector: (row: any) => row.name,
    sortable: true,
    reorder: true,
    width: '200px',
  },
  {
    name: 'Email',
    selector: (row: any) => row.email,
    sortable: true,
    reorder: true,
    width: '200px',
  },
  {
    name: 'Telefone',
    selector: (row: any) => row.telefone,
    sortable: true,
    reorder: true,
    width: '120px',
  },
  {
    name: 'Tipo',
    selector: (row: any) => {
      const userRole = row.userRole;
      const lowercaseRole = userRole.toLowerCase();
      return lowercaseRole.charAt(0).toUpperCase() + lowercaseRole.slice(1);
    },
    sortable: true,
    reorder: true,
    width: '115px',
  },
  {
    name: 'Status',
    selector: (row: any) => (row.status === true ? 'Ativo' : 'Inativo'),
    sortable: true,
    reorder: true,
    width: '80px',
  },
];
