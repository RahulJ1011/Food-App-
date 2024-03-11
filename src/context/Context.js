// Context.js
import { useState } from "react";
import { createContext } from "react";
export const State = createContext();

export default function Context({ children }) {
  const [search, setSearch] = useState(" ");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const data = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const res = await data.json();
      console.log(res?.data);
      setContent(res?.data?.recipes);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFavourite = (item) => {
    setFavourites((prevFavourites) => {
      const list = [...prevFavourites];
      const find = list.findIndex((items) => items.id === item.id);
      if (find === -1) {
        list.push(item);
      } else {
        list.splice(find, 1);
      }
      return list;
    });
  };
  

  return (
    <State.Provider
      value={{ search, setSearch, handleSubmit, content, loading, favourites, handleFavourite }}
    >
      {children}
    </State.Provider>
  );
}
