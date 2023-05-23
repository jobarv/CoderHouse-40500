// const { createApp } = Vue;

// createApp({

//     data() {
//         return {
//             resultado: results
//         }
//     },
//     methods: {
//         incrementa() {

//             for (resultado = i; i < 99; i++) {
//                 resultado += i;
//                 resultado = results
//                 console.log(results)
//             }
//         }

//     }).mount('#app')
const { createApp } = Vue;
createApp({
    data() {
        return {
            resultado: 0
        }
    },
    methods: {
        incrementa() {
            this.resultado++
        },
        decrementa() {
            this.resultado--
        }
    },
    mounted() {
        // methods can be called in lifecycle hooks, or other methods!
        this.incrementa()
        this.decrementa()
    }
}).mount('#app')