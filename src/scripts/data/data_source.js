import Endpoint from '../endpoint';

class DataSource {
  static async home() {
    const response = await fetch(Endpoint.HOME);
    const data = await response.json();
    return data.restaurants;
  }

  static async detail(id) {
    const response = await fetch(Endpoint.DETAIL(id));
    return response.json();
  }
}

export default DataSource;
