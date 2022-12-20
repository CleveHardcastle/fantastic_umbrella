const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const cat = await Category.findAll({ include: Product });
    res.json(cat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const catId = await Category.findByPk(req.params.id);
    if (!catId) {
      res.status(400).json({ message: "No category found with this id" });
      return;
    }
    res.json(catId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const cat = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(cat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const cat = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Successful" });
  } catch (err) {
    res.status(200).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cat = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!cat) {
      res.status(404).json({ message: "No Category found with that id" });
      return;
    }

    res.status(200).json(cat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
