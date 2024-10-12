import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';

const cart = new Cart();
const movie = new Movie(1, 'Test Movie', 150, 2024, 'Russia', 'Test', ['horror', 'drama'], 155);
const book = new Book(2, 'Идиот', 450, 'Достоевский', 1000);
cart.add(movie);
cart.add(book);

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('checking the functions summ', () => {
  expect(cart.summ()).toBe(600);
  expect(cart.summWithDiscount(15)).toBe(510);
});

test('cheking the functions delItem', () => {
  expect(cart.items.length).toBe(2);
  cart.delItem(1);
  expect(cart.items.length).toBe(1);
});