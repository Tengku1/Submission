import DataSource from '../../scripts/data/data_source';
import UrlParser from '../parser';
import AddToFavoriteInitiator from '../../scripts/utils/add_to_favorite_initiator';

const { detailRestaurants } = require('../../views/template');

const Detail = {
  async render() {
    return `
        <div class="listRestaurant" id="listRestaurant">
            <div class="detailList" id="detailList"></div>
        </div>
        `;
  },

  async afterRender() {
    const jumbtoron = document.getElementById('jumbotron');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await DataSource.detail(url.id);
    const { restaurant } = restaurants;
    const detailList = document.getElementById('detailList');
    detailList.innerHTML += detailRestaurants(restaurant);

    const listFoods = document.getElementById('foods');
    const listDrinks = document.getElementById('drinks');
    const customerReviews = document.getElementById('customerReviews');

    jumbtoron.style.display = 'none';

    for (let item = 0; item < restaurant.menus.foods.length; item++) {
      const foods = document.createElement('li');
      foods.innerHTML = restaurant.menus.foods[item].name;
      listFoods.appendChild(foods);
    }
    for (let item = 0; item < restaurant.menus.drinks.length; item++) {
      const drinks = document.createElement('li');
      drinks.innerHTML = restaurant.menus.drinks[item].name;
      listDrinks.appendChild(drinks);
    }
    for (let item = 0; item < restaurant.customerReviews.length; item++) {
      const reviews = document.createElement('div');
      reviews.innerHTML = `<strong>${restaurant.customerReviews[item].name}</strong> - ${restaurant.customerReviews[item].date}<p>${restaurant.customerReviews[item].review}</p>`;
      customerReviews.appendChild(reviews);
    }
    AddToFavoriteInitiator.init({
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
