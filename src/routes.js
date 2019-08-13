const express = require("express");

const { gameList } = require("./controllers/gameList");
const { imgList } = require("./controllers/imgList");
const { unreleasedGames } = require("./controllers/unreleasedGames");
const { unreleasedGameInfo } = require("./controllers/unreleasedGameInfo");
const { gameInfo } = require("./controllers/gameInfo");
const { gameBackground } = require("./controllers/gameBackground");
const { mostExpectedGames } = require("./controllers/mostExpectedGames");
const { releaseDates } = require("./controllers/releaseDates");
const { genres } = require("./controllers/genres");
const { platforms } = require("./controllers/platforms");

const router = express.Router();

router.get("/api/gameList/:limit", gameList);
router.get("/api/game/:cover", imgList);
router.get("/api/unreleasedGames/:limit", unreleasedGames);
router.get("/api/unreleasedGameInfo/:game", unreleasedGameInfo);
router.get("/api/mostExpectedGames/:limit", mostExpectedGames);
router.get("/api/gameInfo/:game", gameInfo);
router.get("/api/gameInfo/background/:screenshot", gameBackground);
router.get("/api/releaseDates/:id", releaseDates);
router.get("/api/genres/:id", genres);
router.get("/api/platforms/:id", platforms);

module.exports = router;
