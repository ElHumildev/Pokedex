import React from "react";
import FavoriteContext from "../contexts/favoritesContext";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
     <div className="nav-radius"><div className="nav-circle"><div className="nav-circle-circle"></div></div></div>
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div className="hearth">&#128153; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
