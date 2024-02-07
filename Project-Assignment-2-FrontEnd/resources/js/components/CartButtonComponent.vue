<template>
<button type="button" class="btn btn-primary cartButton" @click="addToCart"> Add To Cart</button>
</template>

<script>
export default {
    emits:['emit-add-cart'],
    methods:{
        addToCart(){
            this.$emit('emit-add-cart');
        }
    }

}
</script>

<style scoped>
.btn-primary
{
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #FAFAFA;
  --bs-btn-active-bg: #07689F;
  --bs-btn-active-border-color: #07689F;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.cartButton{
    background-color: #211C6A;
    border: 0;
    color: #FAFAFA;
}

.cartButton:hover{
    background: #A2D5F2;
    color: #FAFAFA;
}
</style>
