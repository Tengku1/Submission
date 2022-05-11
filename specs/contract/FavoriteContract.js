import * as FavoriteFactories from '../helpers/createFavoriteInitiator';

const FavoriteModel = (restaurantDB) => {
    it('Must Return The Restaurant That Has Been Added', async () => {
        await FavoriteFactories.FavoriteInitiator({ id: 1 });

        document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'));
        restaurantDB.put({ id: 1 });

        expect(await restaurantDB.get(1))
            .toEqual({ id: 1 });
    });

    it('Call All Restaurant That Have Been Added', async () => {
        await FavoriteFactories.FavoriteInitiator({ id: 1 });

        document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'));
        restaurantDB.put({ id: 1 });

        expect(await restaurantDB.getAll())
            .toEqual([
                { id: 1 }
            ]);
    });

    it('Remove Restaurant From Favorite List', async () => {
        await FavoriteFactories.FavoriteInitiator({ id: 1 });

        document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'));
        restaurantDB.put({ id: 1 });

        await restaurantDB.destroy(1);

        expect(await restaurantDB.getAll())
            .toEqual([]);
    });

    it('Should Handle Request To Remove Restaurant From Favorite List Even If The Restaurant Has Not Been Added', async () => {
        await FavoriteFactories.FavoriteInitiator({ id: 1 });

        document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'));
        restaurantDB.put({ id: 1 });

        await restaurantDB.destroy(4);

        expect(await restaurantDB.getAll())
            .toEqual([
                { id: 1 }
            ]);
    });
};

export { FavoriteModel }