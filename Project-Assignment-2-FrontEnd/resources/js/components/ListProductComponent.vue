<template>
    <h2>Daftar Menu</h2>
<table class="table tableData">
  <thead>
    <tr>
      <th scope="col">Nama</th>
      <th scope="col">Deskripsi</th>
      <th scope="col">Stock</th>
      <th scope="col">Harga</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
        <tr v-for="(item, index) in dataList" :key="index">
          <td>{{ item.Nama }}</td>
          <td>{{ item.Deskripsi }}</td>
          <td>{{ item.Stock }}</td>
          <td>{{ item.Harga }}</td>
          <td><cart-button @emit-add-cart="addCart(item)"></cart-button></td>
        </tr>
      </tbody>
</table>

</template>

<script>
export default {
    props:{
        dataList:{
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods: {
        addCart(item){
            if(item.Stock >0){
                item.Stock -=1;
            let qty = 0;
            qty +=1;
            this.$emit('emit-add-cart',{
                Nama: item.Nama,
                    Quantity: qty,
                    Harga: item.Harga,
                    TotalHarga: item.Stock * item.Harga
                });
            } else{
                alert(`Stok Habis Mas`);
            }
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
