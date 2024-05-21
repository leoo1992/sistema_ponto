export const getPositionDataTableColumns = [
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
      name: "Cargo",
      selector: (row: any) => {
        if (!row.name) return "Não definido";
        return row.name;
      },
      sortable: true,
      flex: 1,
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
  