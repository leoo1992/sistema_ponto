export default function resetCSSDataTable(selectedRows: any) {
  const textHeader = document.querySelector(
    '.rdt_TableHeader > div > div:first-child'
  );

  // @ts-ignore
  const parentDiv = document.querySelector('.rdt_Pagination')?.closest('div');

  if (textHeader && parentDiv) {
    // @ts-ignore
    const selectedId = selectedRows?.map((r: { id_user: number }) => r.id_user);
    const selectedName = selectedRows?.map((r: { name: string }) => r.name);
    textHeader.textContent = selectedId + ' - ' + selectedName;
    parentDiv?.classList.add('w-full');
  }
}
