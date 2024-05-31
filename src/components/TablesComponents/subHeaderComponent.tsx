import { HiSearch, HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const subHeaderComponent = (link:string) => {
  const [filtro, setFiltro] = useState('ativos');
  const [open, setOpen] = useState(false);

  const handleChange = (event: any) => {
    setFiltro(event.target.value);
    handleClose();
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <div className="flex-col-2 flex w-full items-center justify-end gap-2 text-center text-xs">
      <div className="border rounded-lg p-0 justify-between">
        <Select
          labelId="select-filter"
          id="id-select-filter"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filtro}
          label="Filtro"
          onChange={handleChange}
          size="small"
          defaultValue="ativos"
        >
          <MenuItem value="ativos">
            <em>Ativos</em>
          </MenuItem>
          <MenuItem value="inativos">
            <em>Inativos</em>
          </MenuItem>
          <MenuItem value="ambos">
            <em>Ambos</em>
          </MenuItem>
        </Select>
      </div>
      <Link
        to={link}
        className="text-md btn btn-circle glass btn-primary
         btn-sm mt-1 rounded-full bg-primary font-bold
        text-white shadow-md sm:w-28 sm:rounded-badge"
      >
        <span className="hidden sm:block">Cadastro</span>
        <span className="text-xl sm:hidden">
          <HiUserAdd />
        </span>
      </Link>
      <label
        className="input input-sm input-bordered flex w-full min-w-36 items-center
      gap-1 rounded-badge p-4 shadow-sm shadow-primary-content sm:w-fit"
      >
        <HiSearch />
        <input type="text" className="grow" placeholder="Pesquisar" />
      </label>
    </div>
  );
};
