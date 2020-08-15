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

const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};

const isTaskExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() > dueDate.getTime();
};

const isTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
};

const isTaskRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-GB`, {day: `numeric`, month: `long`});
};

export {render, getRandomInteger, getElementFromArray, isTaskExpired, isTaskExpiringToday, isTaskRepeating, humanizeTaskDueDate};
