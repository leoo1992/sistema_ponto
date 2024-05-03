import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { MdLastPage } from 'react-icons/md';
import { MdFirstPage } from 'react-icons/md';
import { useCallback } from 'react';
import IconButton from '@mui/material/IconButton';

export default function Pagination({
  rowsPerPage,
  rowCount,
  currentPage,
  paginationRowsPerPageOptions = '',
  paginationComponentOptions = '',
  onChangeRowsPerPage,
  onChangePage,
  numPages,
  defaultComponentOptions = '',
}: any) {
  console.log('pagination: ', { rowsPerPage, rowCount, currentPage, numPages });

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
    [currentPage, onChangePage]
  );

  const handleNext = useCallback(
    () => onChangePage(currentPage + 1),
    [currentPage, onChangePage]
  );
  const handleFirst = useCallback(() => onChangePage(1), [onChangePage]);

  const handleLast = useCallback(() => {
    const totalPages = Math.ceil(rowCount / rowsPerPage);
    onChangePage(totalPages);
  }, [onChangePage, rowCount, rowsPerPage]);

  const handleRowsPerPage = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      onChangeRowsPerPage(Number(e.target.value), currentPage),
    [currentPage, onChangeRowsPerPage]
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
      </option>
    );
  }

  const select = (
    <select
      className="rounded-lg p-1 shadow-2xl mx-2"
      onChange={handleRowsPerPage}
      defaultValue={rowsPerPage}
      aria-label={options.rowsPerPageText}
    >
      {selectOptions}
    </select>
  );

  return (
    <div className="w-screen bg-transparent flex">
      <div className='flex w-1/12'></div>
      <div className="rdt_Pagination flex items-center w-11/12 scale-x-110 mx-2 py-3 
      border-t-2 border-gray-100 rounded-b-xl justify-center bg-white">
        <div className="flex px-5 py-3 bg-gray-50 shadow-md rounded-lg">
          {!options.noRowsPerPage && (
            <div className="p-0 m-0 items-center hidden sm:block">
              <label className="">Linhas:</label>
              {select}
            </div>
          )}
          {
            <label className="p-0 m-0 flex items-center hidden sm:block">
              <span className="px-3">Registros:</span>
              <span className={`px-2 py-1 rounded-lg bg-base-100 `}>
                {range}
              </span>
            </label>
          }
          <div className="p-0 m-0 gap-0  flex justify-end self-end items-center content-end">
            <IconButton
              id="pagination-first-page"
              type="button"
              aria-label="First Page"
              aria-disabled={disabledLesser}
              onClick={handleFirst}
              disabled={disabledLesser}
              className="p-0 m-0 gap-0 btn-ghost btn-sm btn-circle"
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
              className="p-0 m-0 gap-0 btn-ghost btn-sm btn-circle"
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
              className="p-0 m-0 gap-0 btn-ghost btn-sm btn-circle"
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
              className="p-0 m-0 gap-0 btn-ghost btn-sm btn-circle"
              size="small"
              color="primary"
            >
              <MdLastPage size={25} style={{ margin: 0, padding: 0 }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className='flex w-1/12'></div>
    </div>
  );
}
