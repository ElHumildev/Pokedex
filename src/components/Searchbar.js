import React from "react";
import { searchPokemon } from "../apis/api";
const { useState } = React;


const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    const onChange = (evt) => {
        setSearch(evt.target.value);
    }

    const onClick = async (evt) => {
        const data = await searchPokemon(search);
        console.log(data)
        setPokemon(data);


    }

    return (
        <div className="searchbar-conteiner">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon..."
                    onChange={onChange} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Buscar</button>
            </div>


        </div>
    );
};

export default Searchbar;