import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 2000, 'Leo Tolstoy', 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 900, 'Linkin Park'));

console.log(cart.items);
