import DataSource from '../../scripts/data/data_source';

const { restaurantItems } = require('../../views/template');

const Home = {
  async render() {
    return `
        <div class="listRestaurant" id="listRestaurant">
            <div class="listTitle">
                <h2>Temukan Restaurant Pilihan Anda!</h2>
            </div>
            <div class="list" id="list"></div>
        </div>
        `;
  },

  async afterRender() {
    const jumbtoron = document.getElementById('jumbotron');
    jumbtoron.style.display = 'block';
    const restaurants = await DataSource.home();
    const list = document.getElementById('list');
    list.innerHTML += restaurantItems(restaurants);
  },
};

export default Home;
