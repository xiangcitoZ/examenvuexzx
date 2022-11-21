<template>
  <div style="width: 500px; margin: 0 auto">
    <h1 style="color:orange">REGISTRO</h1>
    <form v-on:submit.prevent="registroUsuario">
      <label class="form-label"> Nombre: </label>
      <input class="form-control" type="text" v-model="registro.nombre" />

      <label class="form-label"> Email: </label>
      <input class="form-control" type="text" v-model="registro.email" />

      <label class="form-label"> Password: </label>
      <input class="form-control" type="text" v-model="registro.password" />

      <label class="form-label"> Repetir contraseña: </label>
      <input class="form-control" type="text" v-model="registro.repetir" />

      <button class="btn btn-secondary">Registro</button>
    </form>
  </div>
</template>

<script>
import ServiceCubo from "./../Services/ServiceCubo";
const service = new ServiceCubo();
export default {
  name: "RegistroUsuario",
  methods: {
    registroUsuario() {
      service.registro(this.registro).then((response) => {
        localStorage.setItem("autho", response.data.response);
        this.$router.push("/home");
      });
    },
  },
  data() {
    return {
      registro: {
        nombre: "",
        email: "",
        password: "",
        repetir: "",
      },
    };
  },
};
</script>


