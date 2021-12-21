<template>
  <v-container class="my-10">

    <h1 class="purple--text">Ingresa tus datos</h1>

    <div class="text-center">
      <v-snackbar v-model="snackbar" :timeout="timeout" top app color="purple">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <v-form ref="form" v-model="valid" lazy-validation class="my-5">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-chip
        class="ma-1"
        color="purple"
        outlined
        @click="validate(name, email)"
      >
        Crea tu usuario
      </v-chip>
    </v-form>
  </v-container>
</template>

<script>
import { collection, getFirestore, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      snackbar: false,
      text: "Registered user.",
      timeout: 2000,

      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },

  methods: {
    validate(name, email) {
      if (this.$refs.form.validate()) {
        this.crear(name, email);
      }
    },

    async crear(name, email) {
      const db = getFirestore();
      await addDoc(collection(db, "usuarios"), {
        name: name,
        email: email,
      });

      this.reset();
      this.snackbar = true;
    },

    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
