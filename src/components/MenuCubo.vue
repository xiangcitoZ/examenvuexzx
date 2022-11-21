<template>
 <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">API CUBO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Cubo</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul class="dropdown-menu" >

            <li v-for="mar in marca" :value="mar" :key="mar">
                <router-link class="dropdown-item" :to="'/marca/' + mar">
                {{mar}}
                </router-link>
            </li>
            
          </ul>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Login</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/registro">Registro</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/perfil">Perfil</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  
</template>

<script>

import ServiceCubo from './../Services/ServiceCubo';
const service = new ServiceCubo();

export default {
  name: 'MenuCubo',
  mounted() {
        service.getCuboMarca().then(result => {
            this.marca = result;
            this.status = true;
        });
    },
    data() {
        return {
            marca: [],
            status: false,

        }
    }
  
}
</script>