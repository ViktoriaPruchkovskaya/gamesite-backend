const axios = require("axios");

const config = require("../config");

const gameList = async (request, response) => {
  try {
    const games = await axios.get(
      config.URL +
        `/games/?fields=name,cover,popularity&order=popularity:desc&limit=${
          request.params.limit
        }`,
      {
        headers: { "user-key": config.USER_KEY }
      }
    );
    response.header("Content-Type", "application/json");
    response.send(games.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { gameList };
