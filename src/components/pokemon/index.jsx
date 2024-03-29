import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import { Container } from "./styled";

export default function Pokemon(props) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "💙";
  console.log("pokemon", pokemon);
  return (
    <Container>
      <div className="card-top">
        <div className="image-pokemon">
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </div>

        <h3> {pokemon.name}</h3>
        <div>Number: {pokemon.id}</div>
      </div>

      <div className="card-bottom">
        <a href={pokemon.species.url} target="_blank" className="pokemon-more-info">
          {" "}
          More Info{" "}
        </a>
        {pokemon.types.map((type, index) => {
          return (
            <div key={index} className="pokemon-type-text">
              {" "}
              {type.type.name}
            </div>
          );
        })}

        <div className="pokemon-abilities">
          Abilities :
          {pokemon.abilities.map((ability, index) => {
            return (
              <div key={index} className="pokemon-ability">
                {" "}
                {ability.ability.name}
              </div>
            );
          })}
        </div>
        <button onClick={onHeartClick}> Favoritar {heart}</button>
      </div>
    </Container>
  );
}
