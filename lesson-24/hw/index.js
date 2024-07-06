// Перетворимо вхідні рядки дат на об'єкти Date.
// Обчислюємо різницю між датами у мілісекундах.
// Використовуємо Math.abs для отримання абсолютного значення різниці, щоб функція коректно працювала незалежно від порядку дат.
// Поступово обчислюємо кількість днів, годин, хвилин та секунд, зменшуючи значення diff після кожного кроку
// Формуємо рядок із різницею та повертаємо її.
export const getDiff = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  let diff = Math.abs(start - end);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));// кількість повних днів у різниці
  diff -= days * (1000 * 60 * 60 * 24); // зменшує diff на кількість мілісекунд, відповідних обчисленим дням.

  const hours = Math.floor(diff / (1000 * 60 * 60)); // кількість повних годин
  diff -= hours * (1000 * 60 * 60); // зменшує diff на кількість мілісекунд, відповідних обчисленим годинам

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000); // обчислює кількість повних секунд у різниці, що залишилася.

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;

}



