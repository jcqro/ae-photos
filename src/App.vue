<template>
  <v-app>
    <template
      v-if="
        this.$store.getters.isLoggedIn &&
          this.$store.getters.authStatus !== 'error'
      "
    >
      <v-main>
       <!--  <router-view></router-view> -->
       <agile-engine-photos></agile-engine-photos>
      </v-main>
    </template>
    <template v-else>
      <app-login-form></app-login-form>
    </template>
  </v-app>
</template>
<script>
import AgileEnginePhotos from "./components/AgileEnginePhotos";
import AppLoginForm from "./components/AppLoginForm";

export default {
  name: "App",
  components: {
    AgileEnginePhotos,
    AppLoginForm
  },
  data: () => ({
    //
  })
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
