<template>
<button type="button" class="btn btn-success" @click="konfirmasiPembayaran">Checkout</button>
</template>

<script>
export default {
    emits:['emit-checkout'],
    props: ['nominal'],
    methods: {
    konfirmasiPembayaran() {
        this.$emit('emit-checkout', this.nominal);
    },
  },
}
</script>

<style scoped>

</style>
