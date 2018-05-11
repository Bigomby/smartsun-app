<template>
  <q-list no-border>
    <q-item>
      <q-item-main align="center">
        <div
          :style="{ 'background-image': `url(${image})`}"
          class="profile-image" />
        <online-status />

        <br>

        <q-item>
          <q-item-main
            class="text-white"
            align="center">
            {{ businessName }}
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
        'https://theroguenews.com/wp-content/uploads/2012/06/Suntanning-sun.bmp',
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
}
</style>
