import MRF_DB from '../../scripts/data/db';

const { restaurantItems } = require('../../views/template');

const Favorite = {
  async render() {
    return `
        <div class="listRestaurant" id="listRestaurant">
            <div class="list" id="list"></div>
        </div>
      `;
  },

  async afterRender() {
    const jumbtoron = document.getElementById('jumbotron');
    jumbtoron.style.display = 'none';
    const restaurants = await MRF_DB.getAll();
    const list = document.getElementById('list');
    list.innerHTML += restaurantItems(restaurants);
  },
};

export default Favorite;
