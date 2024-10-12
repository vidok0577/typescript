import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    summ(): number {
        return this._items.reduce((accum, item) => accum + item.price, 0);
    }

    summWithDiscount(discount: number): number {
        const summ =  this.summ();
        return summ - summ * discount / 100;
    }

    delItem(itemDelete: number): void {
        const searchItem = this._items.findIndex(item => item.id === itemDelete);
        this._items.splice(searchItem, 1);
    }
}