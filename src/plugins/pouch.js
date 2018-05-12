import VuePouch from 'vue-pouch';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import PouchDBLiveFind from 'pouchdb-live-find';

PouchDB.plugin(PouchDBFind);
PouchDB.plugin(PouchDBLiveFind);

export default ({ Vue }) => {
  Vue.use(VuePouch, {
    pouch: PouchDB,
  });
};
