const axios = require("axios");

const config = require("../config");

const unreleasedGames = async (request, response) => {
  try {
    const games = await axios.get(
      config.URL +
        `/release_dates/?order=date:desc&fields=game&limit=${
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

module.exports = { unreleasedGames };
