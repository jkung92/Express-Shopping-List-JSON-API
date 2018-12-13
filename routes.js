const express = require('express');
const router = new express.Router();

const list = [{ name: 'taco', price: 1, id: 1 }];

// This route renders list of shopping items
router.get('', function(req, res, next) {
  // items should have a list of shopping items
  return res.json(list);
});

// This route should accept JSON data and add it to shopping list
router.post('', function(req, res, next) {
  list.push(req.body);
  return res.json(list);
});

// This route should display single item's name and price
router.get('/:id', function(req, res, next) {
  let foundItem = list.find(item => item.id == req.params.id);
  return res.json(foundItem);
});

// This route should modify a single item's name and/or price
router.patch('/:id', function(req, res, next) {
  let foundItem = list.find(item => item.id == req.params.id);
  foundItem.name = req.body.name;
  foundItem.price = req.body.price;
  return res.json(foundItem);
});

// This route should delete specific item from the array
router.delete('/:id', function(req, res, next) {
  let itemIndex = list.findIndex(item => item.id == req.params.id);
  list.splice(itemIndex, 1);
  return res.json({ message: 'Deleted item' });
});

module.exports = router;
