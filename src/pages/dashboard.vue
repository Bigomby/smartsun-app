<template lang="html">
  <q-page padding>
    <div class="row gutter-sm">
      <div
        v-for="machine in machines"
        :key="machine._id"
        class="col-sm-6 col-xl-4"
      >
        <widget-machine :machine="machine" />
      </div>
    </div>
  </q-page >
</template>

<script>
import WidgetMachine from 'components/widget/WidgetMachine';

export default {
  components: {
    WidgetMachine,
  },

  data() {
    return {
      machines: [],
    };
  },

  pouch: {
    machines() {
      return {
        database: 'machines',
        selector: {},
        sort: [{ name: 'asc' }],
      };
    },
  },
};
</script>
