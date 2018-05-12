<template>
  <q-layout view="lHh Lpr lFf">
    <div class="fixed-center background"/>

    <q-layout-header>
      <q-toolbar color="primary" >
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          SmartSun App
        </q-toolbar-title>

        <q-chip
          v-if="isConnected"
          color="positive"
        >
          Conectado al servidor
        </q-chip>
        <q-chip
          v-else
          icon-right="error"
          color="dark"
        >
          Sin conexión con el servidor
        </q-chip>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-primary"
    >
      <q-list
        no-border
        sparse
      >
        <business-info />

        <q-item to="/dashboard">
          <q-item-side
            color="white"
            icon="dashboard"
          />
          <q-item-main
            class="text-white"
            label="Dashboard"
          />
        </q-item>

        <q-item to="/machines">
          <q-item-side
            color="white"
            icon="wb_sunny"
          />
          <q-item-main
            class="text-white"
            label="Máquinas"
          />
        </q-item>

        <q-item disabled>
          <q-item-side
            color="white"
            icon="group"
          />
          <q-item-main
            class="text-white"
            label="Clientes"
          />
        </q-item>

        <q-item disabled>
          <q-item-side
            color="white"
            icon="settings"
          />
          <q-item-main
            class="text-white"
            label="Configuración"
          />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import BusinessInfo from 'components/sidebar/BusinessInfo';
import { mapState } from 'vuex';

export default {
  name: 'LayoutDefault',

  components: {
    BusinessInfo,
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },

  computed: mapState({
    isConnected: state => state.machines.connected,
  }),
};
</script>

<style media="screen">
.background {
  height: 100%;
  width: 100%;
  background-image: url('https://az616578.vo.msecnd.net/files/2016/07/21/6360466055204070191814801362_NorvellLegsonBeachPicture.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(10px);
}
</style>
