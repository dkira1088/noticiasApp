import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticia] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);

      setNoticias(data.articles);
      setTotalNoticia(data.totalResults);
      setPagina(1);

      const paginas = Math.ceil(data.totalResults / data.articles.length);
      setTotalPaginas(paginas);
    };
    consultarApi();
  }, [categoria]);


  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);

      setNoticias(data.articles);
      setTotalNoticia(data.totalResults);
    };
    consultarApi();
  }, [pagina]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, valor) => {
    setPagina(valor);
  };

  return (
    <NoticiasContext.Provider
      value={{ categoria, noticias, totalPaginas,pagina,  handleChangeCategoria, handleChangePagina }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider, NoticiasContext };
