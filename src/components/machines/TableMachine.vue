<template>
  <q-table
    :data="machines"
    :columns="columns"
    :pagination.sync="pagination"
    color="info"
    class="machines-table"
    title="Máquinas"
    row-key="_id"
  >
    <q-td
      slot="body-cell-action"
      slot-scope="props"
      :props="props">
      <edit-machine :machine="props.row" />
      <q-btn
        icon="delete"
        color="negative"
        flat
        @click="removeMachine(props.row)"
      />
    </q-td>

    <template
      slot="top-right"
      slot-scope="props"
    >
      <new-machine />
    </template>
  </q-table>
</template>

<script>
import { formatTime } from 'assets/formatTime';
import NewMachine from 'components/machines/NewMachine';
import EditMachine from 'components/machines/EditMachine';

export default {
  components: {
    NewMachine,
    EditMachine,
  },

  pouch: {
    machines: {},
  },

  data: () => ({
    machines: [],
    pagination: {
      sortBy: 'name',
      descending: false,
      rowsPerPage: 0,
    },
    selected: [],
    columns: [
      {
        name: 'name',
        required: true,
        label: 'Nombre',
        align: 'left',
        field: 'name',
        sortable: true,
      },
      {
        name: 'uptime',
        required: true,
        label: 'Tiempo encendido',
        align: 'left',
        field: row => formatTime(row.uptime),
        sortable: true,
      },
      {
        name: 'totalUptime',
        required: true,
        label: 'Tiempo encendido total',
        align: 'left',
        field: row => formatTime(row.uptime),
        sortable: true,
      },
      {
        name: 'action',
        align: 'right',
      },
    ],
  }),

  methods: {
    async removeMachine(machine) {
      try {
        await this.$q.dialog({
          title: 'Atención',
          message: '¿Desea eliminar esta máquina de forma permanente?',
          color: 'info',
          ok: 'Eliminar',
          cancel: 'Cancelar',
          preventClose: true,
          position: 'top',
        });

        this.$pouch.remove('machines', machine);
      } catch (e) {
        //
      }
    },
  },
};
</script>

<style scoped>
.machines-table {
  background-color: white;
}
</style>
