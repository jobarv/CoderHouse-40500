const { createApp } = Vue;

createApp({
    data() {
        return {
            muestrate: true,
            muestra: true,
            title: "Este es el primer headline",
            titulo1: "Este es el título 1",
            titulo2: "Este es el título 2"

        }
    },
    // methods: {
    //     muestra() {
    //         return {
    //         }
    //     }
    // }

}).mount('#app')