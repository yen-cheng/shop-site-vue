<template>
    <div class="container border rounded p-5 mt-3" style="max-width: 800px;">
        <h3 class="text-center mt-3"><strong>商品情報入力</strong></h3>
        <form>
            <div class="form-group">
                <label for="productName">商品名 </label>
                <input v-model="product.name" :readonly="checked" type="text" id="productName" class="form-control">
            </div>
            <div class="form-group">
                <label for="price">金額 </label>
                <input v-model="product.price" :readonly="checked" type="text" id="price" class="form-control">
            </div>
            <div class="form-group">
                <label for="photoUrl">画像リンク </label>
                <input v-model="product.url" :readonly="checked" type="text" id="photoUrl" class="form-control">
            </div>
            <div class="form-group">
                <label for="description">商品紹介 </label>
                <textarea v-model="product.description" :readonly="checked" type="text" id="description" class="form-control" row="3"></textarea>
            </div>
            <div class="d-flex justify-content-around">
                <button @click.prevent="checked = true" class="btn btn-dark">チェック</button>
                <button @click.prevent="checked = false" class="btn btn-dark" :disabled="!checked">修正</button>
                <button @click.prevent="addProduct" class="btn btn-dark" :disabled="!checked">追加</button>
            </div>
        </form>
        <ul class="list-group mt-5" v-show="checked">
            <li class="list-group-item">商品名：　{{product.name}}</li>
            <li class="list-group-item">金額：　${{product.price}}</li>
            <li class="list-group-item">リンク：<br>{{product.url}}</li>
            <li class="list-group-item">説明：<br>{{product.description}}</li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return {
            product:{
                name: "",
                price: 0,
                url: "",
                description: ""
            },
            checked: false
        }
    },
    methods: {
        addProduct(){
            this.$store.state.products.push(this.product);
            this.$router.push({path: "/products"});
        }
    }
}
</script>