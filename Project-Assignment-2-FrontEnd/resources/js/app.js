/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import CartButtonComponent from './components/CartButtonComponent.vue';
app.component('cart-button', CartButtonComponent);
import DeleteButtonComponent from './components/DeleteButtonComponent.vue';
app.component('delete-button', DeleteButtonComponent);
import ListProductComponent from './components/ListProductComponent.vue';
app.component('list-product', ListProductComponent);
import CartListComponent from './components/CartListComponent.vue';
app.component('cart-list', CartListComponent);
import ShopComponent from './components/ShopComponent.vue';
app.component('shop-page', ShopComponent);
import TotalPriceComponent from './components/TotalPriceComponent.vue';
app.component('total-price', TotalPriceComponent);
import CheckoutButtonComponent from './components/CheckoutButtonComponent.vue';
app.component('checkout-button', CheckoutButtonComponent);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
