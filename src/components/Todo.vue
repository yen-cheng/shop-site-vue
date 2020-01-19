<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        {{todo.content}}
        <div>
            <span class="badge badge-primary badge-pill mr-3">進行中</span>
            <button class="btn btn-sm btn-dark badge-pill">切換狀態</button>
        </div>   
    </li>
</template>

<script>
export default {
    props:["todo"]
}
</script>