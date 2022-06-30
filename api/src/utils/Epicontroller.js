const axios = require("axios");
const { Character, Episode } = require("../db");

//--------------------------------------------

const apiEpi = async () => {
  let arr = [];
  for (let i = 1; i <= 3; i++) {
    const epis = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${i}`
    );
    arr = arr.concat(epis.data.results);
  }
  arr.forEach(async (r) => {
    await Episode.findOrCreate({
      where: {
        id: r.id,
        name: r.name,
      },
    });
  });
  let epi = arr.map((d) => {
    return {
      id: d.id,
      name: d.name,
    };
  });

  return epi;
};

//-------------------------------------------

const getApi = async () => {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    const char = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );
    arr = arr.concat(char.data.results);
  }
  const characters = arr.map((d) => {
    return {
      id: d.id,
      name: d.name,
      status: d.status,
      species: d.species,
      gender: d.gender,
      origin: d.origin.name,
      location: d.location,
      created: d.created,
      image: d.image,
      episode: d.episode.map((e)=>e.split('/').slice(5,6)),//al link le saco el id, con el array me traigo el nombre del epi
    };
  });
  return characters;
};

const bdChar = async () => {
  return  await Character.findAll({
    include: {
      model: Episode,
      attributes: ["name"],
      through: { attributes: [] },//para que de latabla inter no te muestre ningun atributo
    },
  });
  
};
// const bdChar = () => {
//   Character.findAll({
//     include: {
//       model: Episode,
//     },
//   })
//   .then((result) => {
// 	return result
//   })
// };
const union = () => {
  return getApi().then((res) => {
    return bdChar().then((res2) => {
      const response = res.concat(res2);
      return response;
    });
  });
};
module.exports = {
  union,
  apiEpi,
};
