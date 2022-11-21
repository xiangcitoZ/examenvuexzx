<template>
    
    <div >
        <h1>Mi perfil</h1>
        <div style="width:500px; margin: 0 auto" >
        <form method="post"    >
            <br/>
            <br/>
            <h3 style="color:blue">Usuario: {{usuario.nombre}} </h3>       
            <h3 style="color:blue"> Email: {{usuario.email}}</h3>
 

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

