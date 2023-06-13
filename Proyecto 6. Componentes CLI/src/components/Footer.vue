<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div id="footer">
        <h1>{{ msg }}</h1>
    </div>
</template>

<style>
#footer {
    background-color: orange;
    color: black;
}
</style>