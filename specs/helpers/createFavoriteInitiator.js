import AddToFavoriteInitiator from "../../src/scripts/utils/add_to_favorite_initiator";

const FavoriteInitiator = async (restaurant) => {
    await AddToFavoriteInitiator.init({
        restaurant
    });
};

export { FavoriteInitiator };