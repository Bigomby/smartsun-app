import VueSocketio from 'vue-socket.io';
import Socket from 'socket.io-client';

const socket = Socket('http://localhost:3000/status');

export default ({ Vue, store }) => {
  Vue.use(VueSocketio, socket, store);

  socket.on('connect', () => socket.emit('subscribe-status'));
  socket.on('status-update', machines =>
    store.commit('machines/SET_MACHINES', machines),
  );
};
