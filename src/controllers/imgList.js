const axios = require("axios");

const config = require("../config");

const imgList = async (request, response) => {
  try {
    const img = await axios.get(
      config.URL + `/covers/${request.params.cover}?fields=url, game`,
      {
        headers: { "user-key": config.USER_KEY }
      }
    );
    response.header("Content-Type", "application/json");
    response.send(img.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { imgList };
