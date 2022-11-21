<template>
  <div>
    <div style="width: 500px; margin: 0 auto">
      <form method="post" v-on:submit.prevent="volver()">
        <h1 style="color: blue">{{ cubo.nombre }}</h1>
        <h3>Modelo: {{ cubo.modelo }}</h3>
        <h3>Marca: {{ cubo.marca }}</h3>
        <h3>color: {{ cubo.color }}</h3>
        <img style="width: 250px" :src="cubo.imagen" />
        <br />
        <h3>Precio: {{ cubo.precio }}</h3>
        <h3>Valoracion: {{ cubo.valoracion }}</h3>
        <br />
        <button class="btn btn-info" @click="insertarPedido()">Añadir pedido</button>

        <br />
        <br />
        <table class="table table-bordered table-warning">
          <thead>
            <tr>
              <th>Comentario</th>
              <th>Fecha Comentario</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="comentarios in comentarios"
              :key="comentarios.idComentario"
            >
              <td>{{ comentarios.comentario }}</td>
              <td>{{ comentarios.fechaComentarios }}</td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-warning">HOME</button>
      </form>
    </div>
  </div>
</template>

<script>
import ServiceCubo from "./../Services/ServiceCubo";
const service = new ServiceCubo();

export default {
  name: "DetallesCubo",
  watch: {
    //EL CONTROL DE LA VARIABLE SE REALIZA
    //MEDIANTE STRING Y NO SE UTILIZA LA PALABRA this
    "$route.params.id"(nextVal, oldVal) {
      //SI HA CAMBIADO, REALIZAMOS ACCIONES
      if (nextVal != oldVal) {
        //ACCIONES
        this.loadDetallesCubo();
        this.loadComentarios();
      }
    },
  },
  methods: {
    //METODO PARA VOLVER
    volver() {
      this.$router.push("/home/");
    },

    insertarPedido() {
      this.id = this.$route.params.id;
      service.insertarPedido(this.id).then((result) => {
        this.cubo = result;
      });
    },

    loadDetallesCubo() {
      this.id = this.$route.params.id;
      service.detallesCubo(this.id).then((result) => {
        this.cubo = result;
      });
    },
    loadComentarios() {
      this.id = this.$route.params.id;
      service.getComentarios(this.id).then((result) => {
        this.comentarios = result;
      });
    },
  },
  data() {
    return {
      cubo: {},
      id: 0,
      comentarios: [],
    };
  },
  mounted() {
    this.loadDetallesCubo();
    this.loadComentarios();
  },
};
</script>
