const axios = require("axios");

const config = require("../config");

const unreleasedGameInfo = async (request, response) => {
  try {
    const games = await axios.get(
      config.URL + `/games/${request.params.game}?fields=name,cover`,
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

module.exports = { unreleasedGameInfo };
