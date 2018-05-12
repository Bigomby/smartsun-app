<template>
  <div class="">
    <q-btn
      class="float-right"
      icon="add"
      color="info"
      label="Nueva máquina"
      outline
      @click="opened = !opened"
    />

    <q-modal v-model="opened">
      <q-card square>
        <q-card-title align="center">
          Añadir nueva máquina
        </q-card-title>

        <q-card-separator />

        <q-card-main>
          <q-field
            :error="$v.name.$error"
            error-label="Nombre inválido">
            <q-input
              v-model="name"
              color="secondary"
              type="text"
              float-label="Nombre"
              autofocus
              @keyup.enter="create" />
          </q-field>
          <br>
          <q-field >
            <q-input
              v-model="mqttId"
              color="secondary"
              type="text"
              float-label="MQTT ID"
              @keyup.enter="create" />
          </q-field>
          <br>
          <div class="row">
            <q-btn
              color="info"
              class="full-width"
              label="Crear"
              @click="create"
            />
          </div>
          <br>
          <div
            v-if="error"
            class="row">
            <div class="col">
              <q-alert
                :detail="error"
                type="negative"
              >
                Error creando máquina
              </q-alert>
            </div>
          </div>
        </q-card-main>
      </q-card>
    </q-modal>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      name: '',
      mqttId: '',
      error: '',
      opened: false,
    };
  },

  validations: {
    name: { required },
  },

  methods: {
    async create() {
      this.$v.$touch();

      if (this.$v.$error) {
        return;
      }

      this.$pouch.post('machines', {
        name: this.name,
        mqttId: this.mqttId,
        uptime: 0,
        totalUptime: 0,
      });

      this.opened = false;
      this.name = '';
      this.$v.$reset();
    },
  },
};
</script>
