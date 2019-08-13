const axios = require("axios");

const config = require("../config");

const gameInfo = async (request, response) => {
  try {
    const games = await axios.get(
      config.URL +
        `/games/${
          request.params.game
        }?fields=name,cover,screenshots,aggregated_rating_count,aggregated_rating,release_dates,rating_count,rating,genres,summary,platforms`,
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

module.exports = { gameInfo };
