<template>
    <div class="container">
        <div class="card-columns mt-5">
            <div class="card" v-for="product in products.data">
                <img :src="product.url" alt="" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">{{ product.name}}</h3>
                    <p class="card-text">{{product.description}}</p>
                </div>
                <div class="card-footer text-info d-flex justify-content-between">${{product.price}}
                    <button @click.prevent="goProductDetail(product.pid)" class="btn btn-dark btn-sm">詳細</button>
                    <button class="btn btn-dark btn-sm">カート</button>
                </div>
            </div>
        </div>
        <div class="row mb-3 justify-content-center">
            <div class="column col-3">
                <router-link to="/addProduct" tag="a" class="btn btn-block btn-dark">Add New Product</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    methods:{
        goProductDetail(pid){
            var path = "/product/" + pid;
            this.$router.push({path: path});
        }
    },
    computed:{
        products(){
            return this.$store.state.products;
        }
    }
}
</script>