#!/usr/bin/env node
const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
  console.log('Usage: ./0-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) return console.error(error);

  const film = JSON.parse(body);
  const characters_url = film.characters;
  
  for (const ch_url of characters_url) {
    request(ch_url, (err, res, body) => {
      if (err) {return console.error(err)}
      const character = JSON.parse(body);
      
      console.log(character.name);
    });
  }
});
