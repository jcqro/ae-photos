<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card class="elevation-12">
            <v-toolbar color="primary">
              <v-toolbar-title class="white--text">
                <v-img
                  contain
                  max-height="50"
                ></v-img>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="apiKey"
                :rules="[() => !!apiKey || 'apiKey required']"
                label="apiKey"
                autocomplete="off"
                required
              >
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-text-field
                v-if="this.$store.getters.authStatus === 'error'"
                label="Error"
                error
                :placeholder="this.$store.getters.showError"
                error-messages="Incorrect apiKey."
                readOnly
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-btn
                small
                type="submit"
                color="primary"
                :loading="loading"
                @click.prevent="validate"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "AppLoginForm",
  data: () => ({
    apiKey: null,
    valid: true,
    loading: false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const key = { apiKey: this.apiKey };
        this.$store.dispatch("login", key);
      }
    },
    ckeckLoadingStatus() {
      if (this.$store.getters.authStatus === "error") {
        this.loading = false;
      }
    }
  },
  updated() {
    this.ckeckLoadingStatus();
  }
};
</script>