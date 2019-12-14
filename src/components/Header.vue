<template>
    <div>
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
            <span class="navbar-brand">My Shop</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <router-link to="/" tag="li" active-class="active" class="nav-item">
                        <a class="nav-link">Home</a>
                    </router-link>
                    <router-link to="/products" tag="li" active-class="active" class="nav-item">
                        <a class="nav-link">Products</a>
                    </router-link>
                    <router-link to="/product/5" tag="li" active-class="active" class="nav-item">
                        <a class="nav-link">Product detail</a>
                    </router-link>
                </ul>
                <router-link to="/login" tag="a" class="btn btn-outline-light ml-auto">Login</router-link>
            </div>
        </nav>
    </div>
</template>