<template>
<button type="button" class="btn btn-primary deleteButton" @click="deleteMenu(item)"> Delete</button>
</template>

<script>
export default {
    emits:['emit-delete'],
    methods: {
        deleteMenu(){
            this.$emit('emit-delete')
        }
    },

}
</script>

<style scoped>
.btn-primary
{
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #FF7E67;
  --bs-btn-active-bg: #FAFAFA;
  --bs-btn-active-border-color: #A2D5F2;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.deleteButton:hover{
    background-color: #59B4C3;
    color: #FAFAFA;
}

.deleteButton{
    background: #59B4C3;
    color: #FAFAFA;
    border: 0;
}
</style>
