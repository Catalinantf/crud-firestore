import Vue from "vue";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import router from "./router";
import vuetify from "./plugins/vuetify";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDtqA_C0ADdO08aUvWDyNTgDB-EdMyfq44",
  authDomain: "ejercicioclases-45b0e.firebaseapp.com",
  databaseURL: "https://ejercicioclases-45b0e-default-rtdb.firebaseio.com",
  projectId: "ejercicioclases-45b0e",
  storageBucket: "ejercicioclases-45b0e.appspot.com",
  messagingSenderId: "666894287945",
  appId: "1:666894287945:web:84ea7e65cfd8d530d72b98"
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
