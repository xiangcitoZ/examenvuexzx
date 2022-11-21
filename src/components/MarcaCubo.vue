<template>
  <div>
    <h1>Cubos de la marca 
        <span style="color:blue">{{ this.$route.params.marca }}</span>
    </h1>
    <div>
       <form method="post" v-on:submit.prevent="loadDetallesCubo()">
        <table class="table table-bordered table-warning" style="width: 500px">
          <thead>
            <tr>
              <th>nombre</th>
              <th>modelo</th>
              <th>marca</th>
              <th>color</th>
              <th>imagen</th>
              <th>precio</th>
              <th>valoracion</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cubos in cubos" :key="cubos.idCubo">
              <td>{{ cubos.nombre }}</td>
              <td>{{ cubos.modelo }}</td>
              <td>{{ cubos.marca }}</td>
              <td>{{ cubos.color }}</td>
              <td><img style="width: 150px" :src="cubos.imagen" /></td>
              <td>{{ cubos.precio }}</td>
              <td>{{ cubos.valoracion }}</td>
              <td>
                <router-link class="btn btn-dark" :to="'/detalles/' + cubos.idCubo">
                    Detalles
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
import ServiceCubo from "./../Services/ServiceCubo";
const service = new ServiceCubo();

export default {
  name: "MarcaCubo",
  watch: {
    //EL CONTROL DE LA VARIABLE SE REALIZA
    //MEDIANTE STRING Y NO SE UTILIZA LA PALABRA this
    "$route.params.marca"(nextVal, oldVal) {
      //SI HA CAMBIADO, REALIZAMOS ACCIONES
      if (nextVal != oldVal) {
        //ACCIONES
        this.loadMarca();
      }
    },
  },
  methods: {
    loadMarca() {
      this.marca = this.$route.params.marca;

      service.mostrarCuboMarca(this.marca).then((result) => {
        this.cubos = result;
      });
    }
  },
  data() {
    return {
      cubos: []
    };
  },
  mounted() {
    this.loadMarca();
  },
};
</script>