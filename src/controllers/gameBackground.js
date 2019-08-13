const axios = require("axios");

const config = require("../config");

const gameBackground = async (request, response) => {
  try {
    const games = await axios.get(
      config.URL + `/screenshots/${request.params.screenshot}?fields=url`,
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

module.exports = { gameBackground };
