const express = require("express");
const router = express.Router();
const { Character, Episode } = require("../db");
router.post("/", async (req, res) => {
  try {
	
    const { name, species, origin, image, episode } = req.body;
    if (!name || !species || !origin) throw new Error("fiels are clean");
    const char = await Character.create({
      name: name,
      species: species,
      origin: origin,
	  image: image
	  ? image
	  : "https://mamasuncut.com/wp-content/uploads/2020/09/Screen-Shot-0002-09-04-at-2.06.23-PM-1200x673.jpg",
     
    });
    let epi = await Episode.findAll({
      where: {
        name: episode,
      },
    });
    char.addEpisode(epi);
    res.send(char).status(200);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
