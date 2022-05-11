import { FavoriteModel } from './contract/FavoriteContract';

let favorite = [];

const FavoriteArray = {
    get(id) {
        if (!id) {
            return;
        }

        return favorite.find((restaurant) => restaurant.id == id);
    },

    getAll() {
        return favorite;
    },

    put(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        if (this.get(restaurant.id)) {
            return;
        }

        favorite.push(restaurant);
    },

    destroy(id) {
        favorite = favorite.filter((restaurant) => restaurant.id != id);
    },
};

describe('Favorite Restaurant Contract Implementation', () => {
    const describeBtn = () => {
        document.body.innerHTML = `<button id="favoriteBtn">Tambah Ke Favorite</button>`;
    }

    beforeEach(() => {
        describeBtn();
    });

    afterEach(() => favorite = []);

    FavoriteModel(FavoriteArray);
});