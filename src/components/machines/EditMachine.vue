<template>
  <span>
    <q-btn
      icon="edit"
      color="info"
      flat
      @click="opened = !opened"
    />

    <q-modal v-model="opened">
      <q-card square>
        <q-card-title align="center">
          Editar {{ machine.name }}
        </q-card-title>

        <q-card-separator />

        <q-card-main>
          <q-field
            :error="$v.name.$error"
            error-label="Nombre inválido">
            <q-input
              v-model="name"
              maxlength="20"
              color="secondary"
              type="text"
              float-label="Nombre"
              autofocus
              @keyup.enter="register"
            />
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
              label="Actualizar"
              @click="update"
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
  </span>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  props: {
    machine: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      name: this.machine.name,
      mqttId: this.machine.mqttId,
      error: '',
      opened: false,
    };
  },

  validations: {
    name: { required },
  },

  methods: {
    async update() {
      this.$v.$touch();

      if (this.$v.$error) {
        return;
      }

      const machine = await this.$pouch.get('machines', this.machine._id);
      machine.name = this.name;
      machine.mqttId = this.mqttId;
      this.$pouch.put('machines', machine);

      this.opened = false;
    },
  },
};
</script>
