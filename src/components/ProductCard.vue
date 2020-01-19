<template>
    <div class="card">
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
</template>

<script>
export default{
    props:["product"],
    methods:{
        goProductDetail(pid){
            var path = "/product/" + pid;
            this.$router.push({path: path});
        }
    }
}
</script>