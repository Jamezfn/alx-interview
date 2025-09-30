#!/usr/bin/env node
const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
  console.log('Usage: ./0-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

function fetchJson (url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {return reject(err);}
      resolve(JSON.parse(body));
    });
  });
}

(async () => {
  try {
    const film = await fetchJson(url);
    
    for (const characterUrl of film.characters) {
      const character = await fetchJson(characterUrl);
      console.log(character.name);
    }
  } catch (err) {
      console.log(err);
  }
})();
