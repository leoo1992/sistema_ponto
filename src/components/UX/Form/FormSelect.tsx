import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

type FormSelectPropTypes = {
  options: { id: string; name: string }[];
  labelName: string;
  nameDefault?: string;
  classNameLabel?: string;
  classNameSelect?: string;
  classContainer?: string;
  Icon?: any;
  classIcon?: string;
  register: any;
  setValue?: any;
  classNoLabel?: string;
};

export const FormSelect = ({
  options,
  labelName,
  nameDefault = "Selecione",
  classNameLabel = "",
  classNameSelect = "",
  classContainer = "",
  classNoLabel="",
  Icon,
  classIcon,
  register,
  setValue,
}: FormSelectPropTypes) => {
  const [open, setOpen] = useState(false);
  const loading = open && options?.length === 0;

  const sortedOptions = [...options].sort((a, b) => a?.name?.localeCompare(b?.name));

  return (
    <div className={`form-group w-full ${classContainer}`}>
      <label className={`label px-0 pb-0 pt-1 ${classNameLabel}`}>
        <span className="label-text pb-1 pt-3 font-bold text-primary sm:ml-16">
          {labelName}
        </span>
      </label>
      <div className={`${classNoLabel} ${classIcon}`}>
        {classIcon ? (
          <div
            className={`glass mr-3 hidden items-center justify-center rounded-2xl bg-primary-content px-3 
            text-primary shadow-sm shadow-primary sm:flex ${classIcon}`}
          >
            {Icon}
          </div>
        ) : null}

        <Autocomplete
          disablePortal
          openText="Abrir"
          noOptionsText="Opção não encontrada"
          loadingText="Carregando"
          onInputChange={(event, newInputValue) => {
            setValue(newInputValue);
          }}
          autoSelect
          autoHighlight
          clearOnBlur
          clearOnEscape
          clearText="Apagar"
          closeText="Fechar"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) =>
            option?.name === value?.name && option?.id === value?.id
          }
          getOptionLabel={(option) => option?.name || option?.id || ""}
          loading={loading}
          options={sortedOptions}
          className={`rounded-2xl border-0 border-none border-white text-primary shadow-sm shadow-primary ${classNameSelect}`}
          renderInput={(params) => (
            <TextField
              {...params}
              {...register}
              className={`input-md rounded-2xl border-0 border-none border-white text-primary shadow-sm shadow-primary ${classNameSelect}`}
              inputRef={register}
              label={nameDefault}
              margin={"none"}
              InputLabelProps={{
                disableAnimation: true,
                disabled: true,
                sx: {
                  color:
                    params?.inputProps?.value
                      ? "transparent !important"
                      : null,
                  "&.Mui-disabled": {
                    color:
                      params?.inputProps?.value
                        ? "transparent !important"
                        : null,
                  },
                },
              }}
              InputProps={{
                ...params?.InputProps,
                className: `input-md rounded-2xl border-none border-0 border-white text-primary ${classNameSelect}`,
                sx: {
                  color: "blue !important",
                },
                style: {
                  color: "blue !important",
                },
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress
                        sx={{ color: "blue !important" }}
                        color="inherit"
                        size={20}
                      />
                    ) : null}
                    <span
                      className="text-primary"
                      style={{ color: "blue !important" }}
                    >
                      {params?.InputProps?.endAdornment}
                    </span>
                  </>
                ),
              }}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
        />
      </div>
    </div>
  );
};