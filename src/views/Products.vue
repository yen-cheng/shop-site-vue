<template>
    <div class="container">
        <div class="card-columns mt-5">
            <product-card v-for="product in products.data" :product="product"></product-card>
        </div>
        <div class="row mb-3 justify-content-center">
            <div class="column col-3">
                <router-link to="/addProduct" tag="a" class="btn btn-block btn-dark">Add New Product</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"
import axios from "axios"

export default{
    created(){
        axios.get("/admin/products")
            .then(res => {
                console.log(res);
                this.products.data = res.data.data;
                this.products.count = res.data.data.length;
            })
            .catch(err => {
                console.log(err);
            })
    },
    components:{
        productCard:ProductCard
    },

    data(){
        return {
            products:{
                data:[],
                count:0
            }
        }
    }
}
</script>