const MenWear = require('../models/MenWear');

// Create new men wear item
exports.createMenWear = async (req, res) => {
  try {
    const item = new MenWear(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all men wear items
exports.getAllMenWear = async (req, res) => {
  try {
    const items = await MenWear.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update men wear item
exports.updateMenWear = async (req, res) => {
  try {
    const updated = await MenWear.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete men wear item
exports.deleteMenWear = async (req, res) => {
  try {
    await MenWear.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
