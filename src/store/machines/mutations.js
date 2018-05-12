export const SOCKET_CONNECT = state => (state.connected = true);
export const SOCKET_DISCONNECT = state => {
  state.connected = false;
  state.machines = [];
};
export const SET_MACHINES = (state, machines) => (state.machines = machines);
