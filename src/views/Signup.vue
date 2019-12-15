<template>
    <div class="container border rounded mt-3 p-5" style="max-width: 500px;">
        <h3 class="text-center mb-3">新規登録</h3>
        <form>
            <div class="form-group">
                <label for="userId">ユーザID</label>
                <input type="text" class="form-control" id="userId" placeholder="ユーザID">
            </div>
            <div class="form-group">
                <label for="email">Eメール</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="password">パスワード</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <input type="passwordAgain" class="form-control" id="passwordAgain" placeholder="Password">
            </div>
            <input type="submit" value="申請" class="btn btn-dark btn-block mt-3">
        </form>
    </div>
</template>