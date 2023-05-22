import { useContext } from "react";
import { NoticiasContext } from "../context/noticiasProvider";

const useNoticias = ()=> (useContext(NoticiasContext));

export default useNoticias;