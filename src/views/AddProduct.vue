<template>
    <div class="container border rounded p-2 mt-3" style="max-width: 800px;">
        <h3 class="text-center mt-3"><strong>商品情報入力</strong></h3>
        <form>
            <div class="form-group">
                <label for="productName">商品名 </label>
                <input type="text" id="productName" class="form-control">
            </div>
            <div class="form-group">
                <label for="price">金額 </label>
                <input type="text" id="price" class="form-control">
            </div>
            <div class="form-group">
                <label for="description">商品紹介 </label>
                <textarea type="text" id="description" class="form-control" row="3"></textarea>
            </div>
            <input type="submit" value="Add" class="btn btn-dark btn-block">
        </form>
    </div>
</template>