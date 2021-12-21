<template>
  <v-app-bar app color="purple" dark>
    <v-tabs right>
      <v-tab
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        v-text="item.text"
      ></v-tab>

      <v-tabs-slider color="amber darken-2"></v-tabs-slider>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: "Home", to: "/" },
      { text: "Users", to: "/users" },
    ],
  }),
};
</script>
