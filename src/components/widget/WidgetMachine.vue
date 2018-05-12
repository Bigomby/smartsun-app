<template>
  <q-card
    class="card"
  >
    <q-card-title>
      <span class="q-headline">{{ machine.name }}</span>

      <q-chip
        v-if="status"
        class="float-right"
        color="positive"
      >
        Conectada
      </q-chip>
      <q-chip
        v-else
        class="float-right"
        color="negative"
      >
        Sin conexión
      </q-chip>
    </q-card-title>

    <q-card-main>
      <div class="counter">
        <div>
          <div v-if="status === 'paused'">
            <transition name="fade">
              <div
                v-show="blink"
                class="counter-text">
                {{ remaining.minutes }}:{{ remaining.seconds }}
              </div>
            </transition>
          </div>
          <div v-else>
            <div class="counter-text">
              {{ remaining.minutes }}:{{ remaining.seconds }}
            </div>
          </div>
        </div>
      </div>
    </q-card-main>

    <q-card-actions align="center">
      <q-btn-group flat >
        <q-btn
          flat
          size="xl"
          icon="play_arrow"
        />
        <q-btn
          flat
          size="xl"
          icon="pause"
        />
        <q-btn
          flat
          size="xl"
          icon="stop"
        />
      </q-btn-group>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    machine: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      name: 'Cámara 1',
      blink: true,
      online: true,
      remaining: {
        seconds: '00',
        minutes: '00',
      },
    };
  },

  computed: {
    status() {
      return !!~this.$store.state.machines.machines.indexOf(
        this.machine.mqttId,
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~variables';

.counter {
  text-align: center;
  font-size: 40pt;
}

.card {
  color: white;
  background: rgba($secondary, 0.75);
}
</style>
