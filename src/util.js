const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Генерирует случайное число из диапозона
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getElementFromArray = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

export {render, getRandomInteger, getElementFromArray};
