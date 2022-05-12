import CONFIG from '../../config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const restaurantItems = (restaurants) => {
  var restaurantHTML = ``;
  if (restaurants.length === 0 || restaurants === null) {
    return `
      <div class="noItemMsg">
        <h1>Tidak Ada Restoran Favorite</h1>
      </div>
    `;
  }

  restaurants.map((restaurant) => {
    restaurantHTML += `
      <div class="restaurant">
        <div class="restImg">
            <picture>
                <source type="image/webp" media="max-width:600px" srcset="${CONFIG.BASE_SMALL_IMG}${restaurant.pictureId}">
                <source type="image/jpeg" media="max-width:600px" srcset="${CONFIG.BASE_SMALL_IMG}${restaurant.pictureId}">
                <source type="image/webp" media="max-width:600px" srcset="${CONFIG.BASE_LARGE_IMG}${restaurant.pictureId}">
                <source type="image/jpeg" media="max-width:600px" srcset="${CONFIG.BASE_LARGE_IMG}${restaurant.pictureId}">
                <img class="lazyload" src="${CONFIG.BASE_SMALL_IMG}${restaurant.pictureId}" width="400" height="400" alt="${restaurant.name}">
            </picture>
        </div>
        <div class="restDesc">
            <div class="restRate">Rate : ${restaurant.rating}</div>
            <small>${restaurant.city}</small>
            <h2>${restaurant.name}</h2>
            <span>${restaurant.description.substring(0, 350)} ...</span>
            <button class="readMoreBtn" onclick="window.location.href='#/detail/${restaurant.id}'">Read More</button>
        </div>
      </div>
    `;
  });
  return restaurantHTML;
};

const detailRestaurants = (restaurant) => {
  const detail = `
    <div class="restaurantImg">
        <picture>
          <source type="image/webp media="max-width:600px" srcset="${CONFIG.BASE_SMALL_IMG}${restaurant.pictureId}" alt="${restaurant.name}">
          <source type="image/jpeg media="max-width:600px" srcset="${CONFIG.BASE_SMALL_IMG}${restaurant.pictureId}" alt="${restaurant.name}">
          <source type="image/webp media="max-width:600px" srcset="${CONFIG.BASE_LARGE_IMG}${restaurant.pictureId}" alt="${restaurant.name}">
          <source type="image/jpeg media="max-width:600px" srcset="${CONFIG.BASE_LARGE_IMG}${restaurant.pictureId}" alt="${restaurant.name}">
          <img class="lazyload" src="${CONFIG.BASE_SMALL_IMG}${restaurant.pictureId}" width="400" height="400" alt="${restaurant.name}"></img>
        </picture>
    </div>
    <div class="restaurantDesc">
        <p>Rating : ${restaurant.rating}</p>
        <button class="addToFavoriteBtn" id="favoriteBtn">Tambah Ke Favorite</button>
        <h2>${restaurant.name}</h2>
        <h4>Alamat : ${restaurant.address}, ${restaurant.city}</h4>
        <p>${restaurant.description}</p>
        <div class="menus">
            <div class="foods">
                <h4>Menu Makanan</h4>
                <ul id='foods'>
                </ul>
            </div>
            <div class="drinks">
                <h4>Menu Minuman</h4>
                <ul id='drinks'>
                </ul>
            </div>
        </div>
        <h3>Reviews</h3>
        <div class="customerReviews" id="customerReviews"></div>
    </div>
    `;
  return detail;
};

export { restaurantItems, detailRestaurants };
