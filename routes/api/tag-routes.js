const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tag = await Tag.findAll();
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tag = await Product.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: "No Tag exists with that id" });
    }
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const tag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Successful" });
  } catch (err) {
    res.status(200).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tag) {
      res.status(404).json({ message: "No Tag found with that id" });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
