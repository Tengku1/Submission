import MRF_DB from '../data/db';

const AddToFavoriteInitiator = {
  async init({ restaurant }) {
    this.restaurant = restaurant;
    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;
    const favoriteBtn = document.getElementById('favoriteBtn');
    if (await this.isRestaurantExist(id)) {
      favoriteBtn.style.backgroundColor = '#D24B3E';
      favoriteBtn.innerHTML = 'Hapus Dari Favorite';
      favoriteBtn.style.color = 'white';
      this.removeFromFavorite();
    } else {
      favoriteBtn.style.backgroundColor = 'rgb(3, 139, 82)';
      favoriteBtn.innerHTML = 'Tambah Ke Favorite';
      favoriteBtn.style.color = 'white';
      this.setToFavorite();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await MRF_DB.get(id);
    return !!restaurant;
  },

  async setToFavorite() {
    const favoriteBtn = document.getElementById('favoriteBtn');
    favoriteBtn.addEventListener('click', async () => {
      await MRF_DB.put(this.restaurant);
      this.renderButton();
    });
  },

  async removeFromFavorite() {
    const favoriteBtn = document.getElementById('favoriteBtn');
    favoriteBtn.addEventListener('click', async () => {
      await MRF_DB.destroy(this.restaurant.id);
      this.renderButton();
    });
  },
};

export default AddToFavoriteInitiator;
