import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper"; 

type PropTypes = {
  options: { id: string; name: string }[];
  labelName: string;
  nameDefault?: string;
  classNameLabel?: string;
  classNameSelect?: string;
  classNameOption?: string;
  classContainer?: string;
  Icon?: any;
  classIcon?: string;
  autoComplete?: string;
  register: any;
};

export const Select = ({
  options,
  labelName,
  nameDefault = "Selecione",
  classNameLabel = "",
  classNameSelect = "",
  classContainer = "",
  Icon,
  classIcon,
  register,
}: PropTypes) => {
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;

  return (
    <div className={`form-group w-full ${classContainer}`}>
      <label className={`label px-0 pb-0 pt-1 ${classNameLabel}`}>
        <span className="label-text pb-1 pt-3 font-bold text-primary sm:ml-16">
          {labelName}
        </span>
      </label>
      <div className={`${classIcon}`}>
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
          noOptionsText='Opção não encontrada'
          loadingText='Carregando'
          autoHighlight
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option: any, value: any) =>
            option.name === value.name
          }
          
          getOptionLabel={(option) => option.name}
          id="combo-box"
          loading={loading}
          options={options}
          className={`rounded-2xl border-0 border-none border-white text-primary shadow-sm shadow-primary ${classNameSelect}`}
          PaperComponent={CustomPaper} 
          renderInput={(params) => (
            <TextField
              {...params}
              {...register}
              className={`input-md rounded-2xl border-0 border-none border-white text-primary shadow-sm shadow-primary ${classNameSelect}`}
              inputRef={register}
              required
              label={nameDefault}
              margin={"none"}
              InputLabelProps={{
                disableAnimation: true,
                disabled: true,
                sx: {
                  color: params.inputProps.value
                    ? "transparent !important"
                    : null,
                },
              }}
              InputProps={{
                ...params.InputProps,
                className: `input-md rounded-2xl border-none border-0 border-white text-primary ${classNameSelect}`,
                sx: {
                  color: params.inputProps.value
                    ? "blue"
                    : null,
                },
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    <span className="text-primary">{params.InputProps.endAdornment}</span>
                  </>
                ),
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

function CustomPaper(props: any) {
  return (
    <Paper
      {...props}
      sx={{
        maxHeight: 200, 
        overflowY: "auto", 
        color: "blue", 
        ...props.sx, 
      }}
    />
  );
}
