const express = require('express');
const router = express.Router();
const {
  createMenWear,
  getAllMenWear,
  updateMenWear,
  deleteMenWear
} = require('../Controllers/menWearController');  // ✅ correct path

router.post('/', createMenWear);
router.get('/', getAllMenWear);
router.put('/:id', updateMenWear);
router.delete('/:id', deleteMenWear);

module.exports = router;
