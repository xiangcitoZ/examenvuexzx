import { createRouter, createWebHistory } from "vue-router";
import HomeCubo from "./components/HomeCubo.vue"
import MarcaCubo from "./components/MarcaCubo.vue"
import DetallesCubo from "./components/DetallesCubo.vue"
import LoginCubo from "./components/LoginCubo.vue"
import PerfilUsuario from "./components/PerfilUsuario.vue"
import RegistroUsuario from "./components/RegistroUsuario.vue"
import CompraCubo from "./components/CompraCubo.vue"

const routes = [
    {
        path: "/home", component: HomeCubo
    },
    {
        path: "/marca/:marca", component: MarcaCubo
    },
    {
        path: "/detalles/:id", component: DetallesCubo
    },
    {
        path: "/login", component: LoginCubo
    },
    {
        path: "/registro", component: RegistroUsuario
    },
    {
        path: "/perfil", component: PerfilUsuario
    },
    {
        path: "/compra", component: CompraCubo
    },
    
    
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;