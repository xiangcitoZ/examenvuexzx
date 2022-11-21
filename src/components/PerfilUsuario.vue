<template>
    
    <div >
        <div style="width:500px; margin: 0 auto" >
        <form method="post"    >
            
            <h1 style="color:blue">Usuario: {{usuario.nombre}} </h1>       
            <h3>Email: {{usuario.email}}</h3>
 

        </form>
    </div>
          
    </div>
</template>

<script>

import ServiceCubo from "./../Services/ServiceCubo";
const service = new ServiceCubo();

export default {
    name: "PerfilUsuario",
    
    methods: {
        loadPerfil() {
            service.getPefil().then(response => {
                this.empleado = response.data;
                console.log(this.empleado);
            });
        }
    },
    data() {
        return {
            usuario: {
                idUsuario: 0,
                nombre: "",
                email: "",
                pass: ""
            }
        }
    },
    mounted() {
        this.loadPerfil();
    }

}
</script>

