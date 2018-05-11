<template>
  <q-layout view="lHh Lpr lFf">
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
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-primary"
    >
      <q-list
        no-border
        link
        inset-delimiter
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
};
</script>
