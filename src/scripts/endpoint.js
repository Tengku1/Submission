import CONFIG from '../config';

const Endpoint = {
  HOME: `${CONFIG.BASE_URL}list`,
  FAVORITE: `${CONFIG.BASE_URL}favorite`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default Endpoint;
