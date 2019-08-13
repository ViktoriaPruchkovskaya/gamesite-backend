const axios = require("axios");

const config = require("../config");

const genres = async (request, response) => {
  try {
    const genre = await axios.get(
      config.URL + `/genres/${request.params.id}?fields=name`,
      {
        headers: { "user-key": config.USER_KEY }
      }
    );
    response.header("Content-Type", "application/json");
    response.send(genre.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { genres };
