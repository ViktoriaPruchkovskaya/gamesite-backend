const axios = require("axios");

const config = require("../config");

const mostExpectedGames = async (request, response) => {
  try {
    const games = await axios.get(
      config.URL +
        `/games/?fields=name,hypes,cover&filter[hypes][gt]=90&limit=${
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

module.exports = { mostExpectedGames };
