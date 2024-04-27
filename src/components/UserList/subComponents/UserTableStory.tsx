import UserListGET from '../../../services/UserList/UserListGET';
import { getUserDataTableColumns } from '../../../utils/UserList/getUserDataTableColumns.util';
import { NoDataComponent } from './NoDataComponent';
import { ProgressComponent } from './ProgressComponent';
import { SubHeaderComponent } from './SubHeaderComponent';
import { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';

export const UserTableStory = ({
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
  paginationComponent,
}: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const selectableRowsComponentProps = useMemo(
    () => ({
      type: 'radio',
    }),
    [selectableRowsRadio]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        //comente aqui para não carregar usuarios
        const newData = await UserListGET();
        setData(newData);
        // até aqui
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <DataTable
      title={
        <span className=" h-full w-full p-0 m-0 font-semibold">Usuários</span>
      }
      columns={getUserDataTableColumns}
      data={data}
      noDataComponent={NoDataComponent}
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
      progressPending={loading}
      progressComponent={ProgressComponent}
      noHeader={noHeader}
      subHeader={subHeader}
      subHeaderComponent={SubHeaderComponent}
      subHeaderAlign={subHeaderAlign}
      subHeaderWrap={subHeaderWrap}
      noContextMenu={noContextMenu}
      fixedHeader={fixedHeader}
      fixedHeaderScrollHeight={fixedHeaderScrollHeight}
      direction={direction}
      responsive={responsive}
      disabled={disabled}
      paginationComponentOptions={paginationComponentOptions}
      paginationComponent={paginationComponent}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      onSelectedRowsChange={onSelectedRowsChange}
    />
  );
};
