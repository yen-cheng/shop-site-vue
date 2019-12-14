<template>
    <div class="container border rounded mt-3 p-5" style="max-width: 500px;">
        <h3 class="text-center mb-3">ログイン</h3>
        <form>
            <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe">
                <label for="rememberMe" class="form-check-label">Remember Me</label>
            </div>
            <input type="submit" value="Login" class="btn btn-dark btn-block mt-3">
        </form>
    </div>
</template>