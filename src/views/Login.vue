<template>
    <div class="container border rounded mt-3 p-5" style="max-width: 500px;">
        <form>
            <div class="form-group">
                <label for="email">メール</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="password">パスワード</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <input type="submit" value="Login" class="btn btn-dark btn-block">
        </form>
    </div>
</template>