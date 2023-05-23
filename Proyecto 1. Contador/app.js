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