<template>
  <div style="width: 500px; margin: 0 auto">
    <table class="table table-bordered table-warning">
      <thead>
        <tr>
          <th>Id Usuario</th>
          <th>Fecha pedido</th>
        
        </tr>
      </thead>
      <tbody>
        <tr v-for="tablacompra in tablacompra" :key="tablacompra.idPedido">
          <td>{{ tablacompra.idUsuario }}</td>
          <td>{{ tablacompra.fechaPedido }}</td>
         >
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import ServiceCubo from "./../Services/ServiceCubo";
const service = new ServiceCubo();

export default {
  name: "ComprarCubo",

  methods: {
    //METODO PARA DEMOSTRAR LA TABLA
    loadCompra() {
      service.compraUsuario().then((result) => {
        this.tablacompra = result;
      });
    },
  },
  data() {
    return {
      id: 0,
      tablacompra: [],
    };
  },
  mounted() {
    this.loadCompra();
  },
};
</script>