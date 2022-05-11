import { openDB } from 'idb';

const {
  DB_NAME,
  DB_VERSION,
  OBJECT_STORE,
} = require('../../config');

const db = openDB(DB_NAME, DB_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE, { keyPath: 'id' });
  },
});

const MRF_DB = {
  async get(id) {
    return (await db).get(OBJECT_STORE, id);
  },
  async getAll() {
    return (await db).getAll(OBJECT_STORE);
  },
  async put(restaurant) {
    return (await db).put(OBJECT_STORE, restaurant);
  },
  async destroy(id) {
    return (await db).delete(OBJECT_STORE, id);
  },
};

export default MRF_DB;
