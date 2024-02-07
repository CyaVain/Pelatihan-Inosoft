<template>
<table class="table tableData">
  <thead>
    <tr>
      <th scope="col"><h3>Total </h3></th>
      <td ><h3>{{ totalPrice }} </h3></td>
    </tr>
  </thead>
</table>
</template>

<script>
export default {
    props: {
    totalPrice: Number,
  },
}
</script>

<style>
.tableData th{
  border-color: #A2D5F2;
  color: #FAFAFA;
  background-color: #07689F;
}
.tableData td{
    color: #211C6A;
    background-color: #FAFAFA;
}
h3{
    font-weight: bold;
}
</style>
