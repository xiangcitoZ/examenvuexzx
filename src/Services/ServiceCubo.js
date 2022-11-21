import Global from './../Global';
import axios from 'axios';

export default class ServiceCubo {

    login(log) {
        return new Promise(function (resolve) {
            var request = "/api/Manage/Login";
            var url = Global.urlApiCubo + request;

            axios.post(url, log).then(response => {
                resolve(response);
            })
        });
    }

    registro(registro) {
        return new Promise(function (resolve) {
            var request = "/api/Manage/RegistroUsuario";
            var url = Global.urlApiCubo + request;

            axios.post(url, registro).then(response => {
                resolve(response);
            })
        });
    }

    getPefil() {
        return new Promise(function (resolve) {
            const headers = {
                "Authorization": "Bearer " + localStorage.getItem("autho"),
            };

            var request = "/api/Manage/PerfilUsuarioo";
            var url = Global.urlApiCubo + request;

            axios.get(url, { headers }).then(response => {
                resolve(response);
            });
        })
    }

    getCubo() {
        return new Promise(function (resolve) {
            var request = "/api/Cubos";
            var url = Global.urlApiCubo + request;
            var cubos = [];
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    getCuboMarca() {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/Marcas";
            var url = Global.urlApiCubo + request;
            var cubos = [];
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    mostrarCuboMarca(marca) {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/CubosMarca/" + marca;
            var url = Global.urlApiCubo + request;
            var marcas = [];
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }

    detallesCubo(id) {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/" + id;
            var url = Global.urlApiCubo + request;
            var cubos = [];
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    getComentarios(id) {
        return new Promise(function (resolve) {
            var request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
            var url = Global.urlApiCubo + request;
            var comentarios = [];
            axios.get(url).then(response => {
                comentarios = response.data;
                resolve(comentarios);
            })
        })
    }

    compraUsuario() {
        return new Promise(function (resolve) {
            var request = "/api/Compra/ComprasUsuario";
            var url = Global.urlApiCubo + request;
            var compra = [];
            axios.get(url).then(response => {
                compra = response.data;
                resolve(compra);
            })
        })
    }

    insertarPedido(id) {
        return new Promise(function (resolve) {
            var request = "/api/Compra/InsertarPedido/" + id;
            var url = Global.urlApiCubo + request;

            axios.post(url, id).then(response => {
                resolve(response);
            })
        });
    }
}

