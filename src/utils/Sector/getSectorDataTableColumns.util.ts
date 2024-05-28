export const getSectorDataTableColumns = [
    {
      name: "Id",
      selector: (row: any) => {
        if (row.id_sector === null || row.id_sector === undefined) return "Não definido";
        return row.id_sector;
      },
      sortable: true,
      width: "60px",
    },
    {
      name: "Setor",
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
  