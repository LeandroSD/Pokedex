const getColor = (type) => {
  switch (type) {
    case "Bug":
      return "#C5DC90";
      break;

    case "Dark":
      return "#A7A6AB";
      break;

    case "Dragon":
      return "#7FB0E2";
      break;

    case "Electric":
      return "#F8EBA1";
      break;

    case "Fairy":
      return "#F6C4F1";
      break;

    case "Fighting":
      return "#E79BAA";
      break;

    case "Fire":
      return "#FCD0A0";
      break;

    case "Flying":
      return "#CDDBF5";
      break;

    case "Ghost":
      return "#AAB2DB";
      break;

    case "Grass":
      return "#ABDCA7";
      break;

    case "Ground":
      return "#EBBAA1";
      break;

    case "Ice":
      return "#B6E6DE";
      break;

    case "Normal":
      return "#CDCECC";
      break;

    case "Poison":
      return "#D9ACE5";
      break;

    case "Psychic":
      return "#FCBEBD";
      break;

    case "Rock":
      return "#E2DBC1";
      break;

    case "Steel":
      return "#A6C7CE";
      break;

    case "Water":
      return "#A4CBEE";
      break;

    default:
      return "#FF0000";
      break;
  }
};
/*
const getTypeIconColor = (type) => {
  switch (type) {
    case "bug":
      return "#92BD2D";
      break;

    case "dark":
      return "#595761";
      break;

    case "dragon":
      return "#0C6AC8";
      break;

    case "electric":
      return "#F2D94E";
      break;

    case "fairy":
      return "#EF90E6";
      break;

    case "fighting":
      return "#D3425F";
      break;

    case "fire":
      return "#FBA64C";
      break;

    case "flying":
      return "#A1BBEC";
      break;

    case "ghost":
      return "#5F6DBC";
      break;

    case "grass":
      return "#60BD58";
      break;

    case "ground":
      return "#DA7C4D";
      break;

    case "ice":
      return "#76D1C1";
      break;

    case "normal":
      return "#A0A29F";
      break;

    case "poison":
      return "#B763CF";
      break;

    case "psychic":
      return "#FA8582";
      break;

    case "rock":
      return "#C9BC8A";
      break;

    case "steel":
      return "#5795A3";
      break;

    case "water":
      return "#539DDF";
      break;

    default:
      return "#FF0000";
      break;
  }
};

const getIconByType = (type) => {
  switch (type) {
    case "bug":
      return require("../assets/bug.svg");
      break;

    case "dark":
      return require("../assets/dark.svg");
      break;

    case "dragon":
      return require("../assets/dragon.svg");
      break;

    case "electric":
      return require("../assets/electric.svg");
      break;

    case "fairy":
      return require("../assets/fairy.svg");
      break;

    case "fighting":
      return require("../assets/fighting.svg");
      break;

    case "fire":
      return require("../assets/fire.svg");
      break;

    case "flying":
      return require("../assets/flying.svg");
      break;

    case "ghost":
      return require("../assets/ghost.svg");
      break;

    case "grass":
      return require("../assets/grass.svg");
      break;

    case "ground":
      return require("../assets/ground.svg");
      break;

    case "ice":
      return require("../assets/ice.svg");
      break;

    case "normal":
      return require("../assets/normal.svg");
      break;

    case "poison":
      return require("../assets/poison.svg");
      break;

    case "psychic":
      return require("../assets/psychic.svg");
      break;

    case "rock":
      return require("../assets/rock.svg");
      break;

    case "steel":
      return require("../assets/steel.svg");
      break;

    case "water":
      return require("../assets/water.svg");
      break;

    case "pokeball":
      console.log(type);
      return require("../assets/pokebola.svg");
      break;

    default:
      return "#FF0000";
      break;
  }
};

const formatNumber = (number) => {
  const n = number.toString().length;
  switch (n) {
    case 1:
      return `#00${number}`;

      break;

    case 2:
      return `#0${number}`;

    default:
      return `#${number}`;
      break;
  }
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}*/
export default getColor;
//export { getColor, formatNumber, getTypeIconColor, getIconByType, capitalize };
