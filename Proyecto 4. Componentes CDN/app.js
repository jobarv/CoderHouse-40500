const app = Vue.createapp({})
.component('header', {
    template: '#header-template',
    props: {
        name:{type: String, required: true}
    }
})
.component('body', {
    template: '#header-template',
    props: {
        name:{type: String, required: true}
    }
})
.component('footer', {
    template: '#header-template',
    props: {
        name:{type: String, required: true}
    }
})
.mount('#app')