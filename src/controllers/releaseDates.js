const axios = require("axios");

const config = require("../config");

const releaseDates = async (request, response) => {
  try {
    const date = await axios.get(
      config.URL + `/release_dates/${request.params.id}?fields=human`,
      {
        headers: { "user-key": config.USER_KEY }
      }
    );
    response.header("Content-Type", "application/json");
    response.send(date.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { releaseDates };
