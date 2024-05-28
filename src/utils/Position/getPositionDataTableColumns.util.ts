export const getPositionDataTableColumns = [
    {
      name: "Id",
      selector: (row: any) => {
        if (row.id_position === null || row.id_position === undefined) return "Não definido";
        return row.id_position;
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
  