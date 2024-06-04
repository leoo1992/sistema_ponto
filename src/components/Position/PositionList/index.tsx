import { PositionTable } from "./subComponents/PositionTable";

export default function PositionList() {
  return (
    <div
      className="mx-0 mt-4 flex h-full w-11/12 flex-col content-center
         items-center justify-center self-center p-0"
    >
      <PositionTable
        progressComponent
        pagination
        expandableRows
        expandOnRowClicked
        expandOnRowDoubleClicked
        paginationServer
        actions
        defaultSortField="name"
        striped
        dense
        highlightOnHover
        pointerOnHover
        subHeader
        subHeaderAlign="right"
        subHeaderWrap
        responsive
      />
    </div>
  );
}
