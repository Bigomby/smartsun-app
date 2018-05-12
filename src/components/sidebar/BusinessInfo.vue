<template>
  <q-list no-border>
    <q-item>
      <q-item-main align="center">
        <div
          :style="{ 'background-image': `url(${image})`}"
          class="profile-image" />
        <br>

        <q-item>
          <q-item-main
            class="text-white"
            align="center">
            <p class="q-title">
              {{ businessName }}
            </p>
          </q-item-main>
        </q-item>
      </q-item-main>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'UserInfo',

  data() {
    return {
      image:
        'http://cdn2.momjunction.com/wp-content/uploads/2015/06/Tanning-Beds-While-Breastfeeding.jpg',
      businessName: 'Centro de Bronceado Oclose',
    };
  },
};
</script>

<style>
.profile-image {
  border-radius: 50%;
  width: 200px;
  padding-top: 200px;
  background-size: cover;
  background-position: center;
}
</style>
