import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { CATEGORIAS } from "../utils/constants/categorias";
import useNoticias from "../hooks/useNoticias";

const Formulario = () => {
 const {categoria, handleChangeCategoria} = useNoticias();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select label="Categoría" onChange={handleChangeCategoria} value={categoria}>
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Formulario;
