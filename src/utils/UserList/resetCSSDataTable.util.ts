export default function resetCSSDataTable(selectedRows: any) {
  const textHeader = document.querySelector(
    '.rdt_TableHeader > div > div:first-child'
  );

  // @ts-ignore
  const parentDiv = document.querySelector('.rdt_Pagination')?.closest('div');

  if (textHeader && parentDiv) {
    // @ts-ignore
    const selectedId = selectedRows?.map((r) => r.id);
    textHeader.textContent = 'Id: ' + selectedId + ' -  Selecionado';
    parentDiv?.classList.add('w-full');
  }
}
