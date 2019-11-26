<template>
    <div>
        <ul class="nav nav-pills">
            <router-link to="/" tag="li" active-class="active" exact>
                <a class="nav-link">Home</a>
            </router-link>
            <router-link to="/products" tag="li" active-class="active">
                <a class="nav-link">Products</a>
            </router-link>
            <router-link to="/product/5" tag="li" active-class="active">
                <a class="nav-link">Product detail</a>
            </router-link>
        </ul>
    </div>
</template>