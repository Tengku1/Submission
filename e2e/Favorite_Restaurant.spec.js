Feature('Favorite Restaurant');
const assert = require('assert');

Scenario('If Restaurant Favorite List Is Empty', async ({ I }) => {
    I.amOnPage('/#/Favorite');
    I.see('Tidak Ada Restoran Favorite', '.noItemMsg');
    I.amOnPage('/#main');

    I.wait(1);
});

Scenario('Should Can Select Restaurant and Add To Favorite List', async ({ I }) => {
    I.amOnPage('/#main');
    I.wait(1);
    I.seeElement('.restaurant .restDesc');

    for (let i = 1; i <= 3; i++) {
        I.wait(1);
        const restaurant_name = locate('.restaurant .restDesc h2').at(i);
        const restaurant = await I.grabTextFrom(restaurant_name);
        I.click(locate('.restaurant .restDesc .readMoreBtn').at(i));

        I.seeElement('.addToFavoriteBtn');
        const favorite_name = await I.grabTextFrom(".detailList .restaurantDesc h2");
        assert.strictEqual(restaurant, favorite_name);
        I.click('.addToFavoriteBtn');
        I.amOnPage('/#main');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant');
});

Scenario('Should Can Remove Restaurant From To Favorite List', async ({ I }) => {
    I.amOnPage('/#main');
    I.wait(1);
    I.seeElement('.restaurant .restDesc');

    for (let i = 1; i <= 3; i++) {
        I.wait(1);
        const restaurant_name = locate('.restaurant .restDesc h2').at(i);
        const restaurant = await I.grabTextFrom(restaurant_name);
        I.click(locate('.restaurant .restDesc .readMoreBtn').at(i));

        I.seeElement('.addToFavoriteBtn');
        const favorite_name = await I.grabTextFrom(".detailList .restaurantDesc h2");
        assert.strictEqual(restaurant, favorite_name);

        // First action is add to favorite
        I.click('.addToFavoriteBtn');
        // And second action is remove from favorite list
        I.click('.addToFavoriteBtn');

        I.amOnPage('/#main');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('.noItemMsg');
});


