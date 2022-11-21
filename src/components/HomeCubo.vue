<template>
  <div>
    <table class="table table-bordered table-warning">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Color</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>Valoracion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cubos in tablacubo" :key="cubos.idCubo">
          <td>{{ cubos.nombre }}</td>
          <td>{{ cubos.modelo }}</td>
          <td>{{ cubos.marca }}</td>
          <td>{{ cubos.color }}</td>

          <td><img style="width: 250px" :src="cubos.imagen" /></td>

          <td>{{ cubos.precio }}</td>
          <td>{{ cubos.valoracion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import ServiceCubo from "./../Services/ServiceCubo";
const service = new ServiceCubo();

export default {
  name: "HomeCubo",

  methods: {
    //METODO PARA DEMOSTRAR LA TABLA
    loadCubo() {
      service.getCubo().then((result) => {
        this.tablacubo = result;
      });
    },
  },
  data() {
    return {
      id: 0,
      tablacubo: [],
    };
  },
  mounted() {
    this.loadCubo();
  },
};
</script>