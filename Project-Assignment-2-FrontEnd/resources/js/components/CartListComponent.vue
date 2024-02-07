<template>
    <h2>Keranjang Belanja</h2>
<table class="table tableData">
  <thead>
    <tr>
      <th scope="col">Nama</th>
      <th scope="col">Quantity</th>
      <th scope="col">Harga</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
        <tr v-for="(item, index) in cartList" :key="index">
          <td>{{ item.Nama }}</td>
          <td>{{ item.Quantity }}</td>
          <td>{{ item.Harga }}</td>
          <td><delete-button @emit-delete="deleteMenu(index)"></delete-button></td>
        </tr>
      </tbody>
</table>

</template>

<script>
export default {
    props:{
        cartList:{
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods:{
            deleteMenu(index){
                this.$emit('emit-delete', index);
            },
        },
    mounted() {
            console.log('Component mounted.')
        }
}
</script>

<style scoped>
.tableData th{
  border-color: #A2D5F2;
  color: #211C6A;
  background-color: #74E291;
}
.tableData td{
    color: #211C6A;
    background-color: #FAFAFA;
}
h2{
    color: #211C6A;
}
</style>
