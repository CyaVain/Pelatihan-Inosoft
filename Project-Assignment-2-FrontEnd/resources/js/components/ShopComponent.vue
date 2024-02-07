<template>
    <div class="container">
        <list-product @emit-add-cart="addToCart" :dataList="daftarMenu"></list-product>    </div>
    <div class="container">
        <cart-list @emit-delete="deleteMenu" :cartList="cartItems"></cart-list>
    </div>
    <div class="container">
        <total-price :totalPrice="formatAngka"></total-price>
    </div>
    <div class="container">
        <checkout-button :nominal="formatAngka" @emit-checkout="konfirmasiPembayaran"></checkout-button>
    </div>

</template>

<script>
export default {
    data: function(){
        return{
            daftarMenu:[
                {Nama: "Nasi Goreng Telor", Deskripsi: "Nasi Goreng Telor Biasa", Stock: 50, Harga: 15000},
                {Nama: "Nasi Goreng Telor Jumbo", Deskripsi: "Nasi Goreng Telor Dengan Porsi Jumbo", Stock: 25, Harga: 25000},
                {Nama: "Nasi Goreng Spesial", Deskripsi: "Nasi Goreng Dengan Topping Beragam", Stock: 15, Harga: 20000},
                {Nama: "Nasi Goreng Gila", Deskripsi: "Nasi Goreng Dengan Topping Beragam dan Porsi Super Jumbo", Stock: 1, Harga: 150000}

            ],
            cartItems:[],
        };
    },
    methods: {
        addToCart(cartItem) {
            const existingItem = this.cartItems.findIndex(item => item.Nama === cartItem.Nama);

            if (existingItem !== -1) {
                this.cartItems[existingItem].Quantity += 1;
                this.cartItems[existingItem].Harga += cartItem.Harga;
            } else {
                this.cartItems.push(cartItem);
            }
        },
        deleteMenu(cartItem){
            this.cartItems.splice(cartItem,1)
        },
        konfirmasiPembayaran(nominal){
            alert(`Your Payment ${nominal} Have Been Confirmed`);
            this.cartItems =[];
        }
    },
    computed:{
        totalBiaya(){
            return this.cartItems.reduce((total, item) => total + item.Harga, 0);
        },
        formatAngka(){
            return this.totalBiaya.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
        }
    },
    mounted(){
            console.log("Mounted")
        }
}
</script>

<style>
</style>
