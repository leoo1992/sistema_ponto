import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { MdLastPage } from "react-icons/md";
import { MdFirstPage } from "react-icons/md";
import { useCallback } from "react";
import IconButton from "@mui/material/IconButton";

export default function Pagination({
  rowsPerPage,
  rowCount,
  currentPage,
  paginationRowsPerPageOptions = "",
  paginationComponentOptions = "",
  onChangeRowsPerPage,
  onChangePage,
  numPages,
  defaultComponentOptions = "",
}: any) {
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage + 1;
  const disabledLesser = currentPage === 1;
  const disabledGreater = currentPage === numPages;
  const options = { ...defaultComponentOptions, ...paginationComponentOptions };

  const range =
    currentPage === numPages
      ? `${firstIndex}-${rowCount} / ${rowCount}`
      : `${firstIndex}-${lastIndex} / ${rowCount}`;

  const handlePrevious = useCallback(
    () => onChangePage(currentPage - 1),
    [currentPage, onChangePage],
  );

  const handleNext = useCallback(
    () => onChangePage(currentPage + 1),
    [currentPage, onChangePage],
  );
  const handleFirst = useCallback(() => onChangePage(1), [onChangePage]);

  const handleLast = useCallback(() => {
    const totalPages = Math.ceil(rowCount / rowsPerPage);
    onChangePage(totalPages);
  }, [onChangePage, rowCount, rowsPerPage]);

  const handleRowsPerPage = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      onChangeRowsPerPage(Number(e.target.value), currentPage),
    [currentPage, onChangeRowsPerPage],
  );

  const selectOptions = paginationRowsPerPageOptions.map((num: number) => (
    <option key={num} value={num}>
      {num}
    </option>
  ));

  if (options.selectAllRowsItem) {
    selectOptions.push(
      <option key={-1} value={rowCount}>
        {options.selectAllRowsItemText}
      </option>,
    );
  }

  const select = (
    <select
      className="mx-2 rounded-lg p-1 shadow-2xl"
      onChange={handleRowsPerPage}
      defaultValue={rowsPerPage}
      aria-label={options.rowsPerPageText}
    >
      {selectOptions}
    </select>
  );

  return (
    <div className="flex w-screen bg-transparent">
      <div className="flex w-1/12"></div>
      <div
        className="rdt_Pagination mx-2 flex w-11/12 scale-x-110 items-center justify-center 
      rounded-b-xl border-t-2 border-gray-100 bg-white py-3"
      >
        <div className="flex rounded-lg bg-gray-50 px-5 py-3 shadow-md">
          {!options.noRowsPerPage && (
            <div className="m-0 hidden items-center p-0 sm:block">
              <label className="">Linhas:</label>
              {select}
            </div>
          )}
          {
            <label className="m-0 flex hidden items-center p-0 sm:block">
              <span className="px-3">Registros:</span>
              <span className={`rounded-lg bg-base-100 px-2 py-1 `}>
                {range}
              </span>
            </label>
          }
          <div className="m-0 flex content-end  items-center justify-end gap-0 self-end p-0">
            <IconButton
              id="pagination-first-page"
              type="button"
              aria-label="First Page"
              aria-disabled={disabledLesser}
              onClick={handleFirst}
              disabled={disabledLesser}
              className="btn-circle btn-ghost btn-sm m-0 gap-0 p-0"
              size="small"
              color="primary"
            >
              <MdFirstPage size={25} style={{ margin: 0, padding: 0 }} />
            </IconButton>

            <IconButton
              id="pagination-previous-page"
              type="button"
              aria-label="Previous Page"
              aria-disabled={disabledLesser}
              onClick={handlePrevious}
              disabled={disabledLesser}
              className="btn-circle btn-ghost btn-sm m-0 gap-0 p-0"
              size="small"
              color="primary"
            >
              <MdNavigateBefore size={25} style={{ margin: 0, padding: 0 }} />
            </IconButton>
            {currentPage}
            <IconButton
              id="pagination-next-page"
              type="button"
              aria-label="Next Page"
              aria-disabled={disabledGreater}
              onClick={handleNext}
              disabled={disabledGreater}
              className="btn-circle btn-ghost btn-sm m-0 gap-0 p-0"
              size="small"
              color="primary"
            >
              <MdNavigateNext size={25} style={{ margin: 0, padding: 0 }} />
            </IconButton>
            <IconButton
              id="pagination-last-page"
              type="button"
              aria-label="Last Page"
              aria-disabled={disabledGreater}
              onClick={handleLast}
              disabled={disabledGreater}
              className="btn-circle btn-ghost btn-sm m-0 gap-0 p-0"
              size="small"
              color="primary"
            >
              <MdLastPage size={25} style={{ margin: 0, padding: 0 }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex w-1/12"></div>
    </div>
  );
}
