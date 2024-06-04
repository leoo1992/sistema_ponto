import { HiSearch, HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const subHeaderComponent = (link: string) => {
  const [filtro, setFiltro] = useState("ativos");
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
    <div className="flex-row flex w-full items-center justify-end gap-1 sm:gap-2 text-center text-xs m-0">

      <div className="m-0 justify-between rounded-full border p-0 shadow">
        <div className="tooltip tooltip-top font-normal m-0 p-0" data-tip="Status">
          <label
            htmlFor="select-filter"
            className="hidden pl-3 m-0 font-semibold sm:inline-block"
          >
            Exibindo:
          </label>
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
            sx={{padding: 0, margin: 0, fontSize: "smaller", gap: 0}}
          >
            <MenuItem
              dense
              value="ativos"
              sx={{
                margin: 0,
                fontSize: "small",
                paddingBottom: 0,
                paddingTop: 0,
              }}
            >
              <span className="m-0 p-0 text-xs">Ativos</span>
            </MenuItem>
            <MenuItem
              dense
              value="inativos"
              sx={{
                margin: 0,
                fontSize: "small",
                paddingBottom: 0,
                paddingTop: 0,
              }}
            >
              <span className="m-0 p-0 text-xs">Inativos</span>
            </MenuItem>
            <MenuItem
              dense
              value="ambos"
              sx={{
                margin: 0,
                fontSize: "small",
                paddingBottom: 0,
                paddingTop: 0,
              }}
            >
              <span className="m-0 p-0 text-xs">Ambos</span>
            </MenuItem>
          </Select>
        </div>
      </div>
      <Link
        to={link}
        className="text-md btn btn-circle glass btn-primary
         btn-sm rounded-full bg-primary font-bold
        text-white shadow-md sm:w-24 sm:rounded-badge"
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
