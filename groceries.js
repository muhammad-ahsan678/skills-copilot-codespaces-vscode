// Grocery Item Managing Tool

const groceryList = [];
let nextId = 1;

function addItem(name, quantity = 1, unit = '') {
  if (!name || typeof name !== 'string' || name.trim() === '') {
    throw new Error('Item name must be a non-empty string.');
  }
  if (typeof quantity !== 'number' || quantity <= 0) {
    throw new Error('Quantity must be a positive number.');
  }
  const item = {
    id: nextId++,
    name: name.trim(),
    quantity,
    unit: unit.trim(),
    purchased: false,
  };
  groceryList.push(item);
  return item;
}

function removeItem(id) {
  const index = groceryList.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error(`Item with id ${id} not found.`);
  }
  return groceryList.splice(index, 1)[0];
}

function listItems() {
  return [...groceryList];
}

function markAsPurchased(id) {
  const item = groceryList.find((item) => item.id === id);
  if (!item) {
    throw new Error(`Item with id ${id} not found.`);
  }
  item.purchased = true;
  return item;
}

function clearPurchased() {
  const removed = [];
  const remaining = [];
  for (const item of groceryList) {
    (item.purchased ? removed : remaining).push(item);
  }
  groceryList.splice(0, groceryList.length, ...remaining);
  return removed;
}

module.exports = { addItem, removeItem, listItems, markAsPurchased, clearPurchased };
