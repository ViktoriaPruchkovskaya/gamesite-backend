const axios = require("axios");

const config = require("../config");

const platforms = async (request, response) => {
  try {
    const platform = await axios.get(
      config.URL + `/platforms/${request.params.id}?fields=name`,
      {
        headers: { "user-key": config.USER_KEY }
      }
    );
    response.header("Content-Type", "application/json");
    response.send(platform.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { platforms };
