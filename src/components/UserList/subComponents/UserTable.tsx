import { useMemo } from 'react';
import { TextField } from '@mui/material';
import DataTable, { Alignment, Direction } from 'react-data-table-component';

const customText = {
  rowsPerPage: 'Linhas por página:',
  previous: 'Anterior',
  next: 'Próxima',
  loading: 'Carregando',
  noMatch: 'Nenhum registro encontrado',
  page: 'Página',
  of: 'de',
  selected: '{0} selecionado',
  noSelectedRowsSelected: '',
  selectedRows: {
    one: '{0} selecionado',
    other: '{0} selecionados',
  },
  noRowsSelected: '',
};

const data = [
  {
    id: 1,
    name: 'Leonardo',
    email: 'teste@test.com',
    telefone: '897489496',
    userRole: 'Administrador',
    ativo: 'Sim',
  },
  {
    id: 2,
    name: 'Samuel',
    email: 'teste@test.com',
    telefone: '897489496',
    userRole: 'Administrador',
    ativo: 'Sim',
  },
];
const columns = [
  {
    name: 'Id',
    selector: (row: any) => row.id,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Nome',
    selector: (row: any) => row.name,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Email',
    selector: (row: any) => row.email,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Telefone',
    selector: (row: any) => row.telefone,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Tipo',
    selector: (row: any) => row.userRole,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Status',
    selector: (row: any) => row.ativo,
    sortable: true,
    reorder: true,
  },
];

const subHeaderComponent = (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <TextField
      id="outlined-basic"
      label="Pesquisar"
      variant="outlined"
      size="small"
      style={{ margin: '5px' }}
    />
    {/* icones aqui */}
  </div>
);

const UserTableStory = ({
  selectableRows,
  selectableRowsNoSelectAll,
  selectableRowsVisibleOnly,
  selectableRowsHighlight,
  selectableRowsSingle,
  expandableRows,
  expandOnRowClicked,
  expandOnRowDoubleClicked,
  expandableRowsHideExpander,
  pagination,
  highlightOnHover,
  striped,
  pointerOnHover,
  dense,
  persistTableHead,
  noHeader,
  fixedHeader,
  fixedHeaderScrollHeight,
  progressPending,
  selectableRowsRadio,
  noTableHead,
  noContextMenu,
  direction,
  subHeader,
  subHeaderAlign,
  subHeaderWrap,
  responsive,
  disabled,
  onSelectedRowsChange,
  paginationComponentOptions,
  paginationRowsPerPageOptions,
}: any) => {
  const selectableRowsComponentProps = useMemo(
    () => ({
      type: 'radio',
    }),
    [selectableRowsRadio]
  );

  return (
    <DataTable
      title="Usuarios"
      columns={columns}
      data={data}
      defaultSortFieldId={1}
      selectableRows={selectableRows}
      selectableRowsComponentProps={selectableRowsComponentProps}
      selectableRowsNoSelectAll={selectableRowsNoSelectAll}
      selectableRowsHighlight={selectableRowsHighlight}
      selectableRowsSingle={selectableRowsSingle}
      selectableRowsVisibleOnly={selectableRowsVisibleOnly}
      expandableRows={expandableRows}
      expandOnRowClicked={expandOnRowClicked}
      expandOnRowDoubleClicked={expandOnRowDoubleClicked}
      expandableRowsHideExpander={expandableRowsHideExpander}
      pagination={pagination}
      highlightOnHover={highlightOnHover}
      striped={striped}
      pointerOnHover={pointerOnHover}
      dense={dense}
      noTableHead={noTableHead}
      persistTableHead={persistTableHead}
      progressPending={progressPending}
      noHeader={noHeader}
      subHeader={subHeader}
      subHeaderComponent={subHeaderComponent}
      subHeaderAlign={subHeaderAlign}
      subHeaderWrap={subHeaderWrap}
      noContextMenu={noContextMenu}
      fixedHeader={fixedHeader}
      fixedHeaderScrollHeight={fixedHeaderScrollHeight}
      direction={direction}
      responsive={responsive}
      disabled={disabled}
      paginationComponentOptions={paginationComponentOptions}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      onSelectedRowsChange={onSelectedRowsChange}
    />
  );
};
// @ts-ignore
const Template = (args) => <UserTableStory {...args} />;

export const UserTable = Template.bind({});

// @ts-ignore
UserTable.parameters = { controls: { include: ['foo', 'bar'] } };
// @ts-ignore
UserTable.args = {
  selectableRows: true,
  selectableRowsNoSelectAll: false,
  selectableRowsVisibleOnly: false,
  selectableRowsHighlight: false,
  selectableRowsSingle: false,
  expandableRows: false,
  expandOnRowClicked: false,
  expandOnRowDoubleClicked: false,
  expandableRowsHideExpander: false,
  pagination: true,
  highlightOnHover: false,
  striped: false,
  pointerOnHover: false,
  text: { customText },
  dense: false,
  persistTableHead: false,
  noHeader: false,
  fixedHeader: false,
  fixedHeaderScrollHeight: '300px',
  progressPending: false,
  noTableHead: false,
  noContextMenu: false,
  direction: Direction.AUTO,
  subHeader: false,
  subHeaderAlign: Alignment.CENTER,
  subHeaderWrap: true,
  responsive: true,
  disabled: false,
  paginationComponentOptions: {
    rowsPerPageText: 'Linhas por página:',
    rangeSeparatorText: 'de',
    noRowsPerPage: false,
  },
  paginationRowsPerPageOptions: [5, 10, 15],
  onSelectedRowsChange: '',
};

export default {
  title: 'Getting Started/Kitchen Sink',
  component: UserTable,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    selectableRows: {
      table: {
        category: 'Selectable Rows',
      },
    },
    selectableRowsNoSelectAll: {
      table: {
        category: 'Selectable Rows',
      },
    },
    selectableRowsVisibleOnly: {
      table: {
        category: 'Selectable Rows',
      },
    },
    selectableRowsHighlight: {
      table: {
        category: 'Selectable Rows',
      },
    },
    selectableRowsSingle: {
      table: {
        category: 'Selectable Rows',
      },
    },
    expandableRows: {
      table: {
        category: 'Expandable Rows',
      },
    },
    expandOnRowClicked: {
      table: {
        category: 'Expandable Rows',
      },
    },
    expandOnRowDoubleClicked: {
      table: {
        category: 'Expandable Rows',
      },
    },
    expandableRowsHideExpander: {
      table: {
        category: 'Expandable Rows',
      },
    },
    subHeaderAlign: {
      options: [Alignment.RIGHT, Alignment.CENTER, Alignment.LEFT],
      control: { type: 'select' },
    },
    direction: {
      options: [Direction.AUTO, Direction.LTR, Direction.RTL],
      control: { type: 'select' },
    },
    selectableRowsRadio: {
      options: ['radio', 'checkbox'],
      control: { type: 'select' },
      table: {
        category: 'Selectable Rows',
      },
    },
  },
};
