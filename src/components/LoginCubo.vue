<template>
  <div style="width:500px; margin: 0 auto">
    <h1 style="color:orange">USUARIO</h1>
    <form v-on:submit.prevent="logUsuario">
      <label class="form-label"> Usuario: </label>
      <input class="form-control" type="text" v-model="login.userName" />

      <label class="form-label"> Password: </label>
      <input class="form-control" type="text" v-model="login.password" />

      <button class="btn btn-secondary">Login</button>
    </form>
  </div>
</template>

<script>
import ServiceCubo from "./../Services/ServiceCubo";
const service = new ServiceCubo();
export default {
  name: "LoginCubo",
  methods: {
    logUsuario() {
      service.login(this.login).then((response) => {
        localStorage.setItem("autho", response.data.response);
        this.$router.push("/home");
      });
    },
  },
  data() {
    return {
      login: {
        userName: "",
        password: "",
      },
    };
  },
};
</script>


