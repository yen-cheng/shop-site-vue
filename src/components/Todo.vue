<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        {{todo.content}}
        <div>
            <span class="badge badge-primary badge-pill mr-3">進行中</span>
            <button class="btn btn-sm btn-dark badge-pill">切換狀態</button>
            <button class="btn btn-sm btn-danger badge-pill" @click="deleteTodo">刪除</button>
        </div>   
    </li>
</template>

<script>
import axios from "axios"
export default {
    props:["todo"],
    methods:{
        deleteTodo(){
            axios.delete("/admin/todolist/" + this.todo.id)
                .then(res => {
                    console.log("delete todo success!");
                    this.$emit("reload");
                })
                .catch(err => console.log(err));
        }
    }
}
</script>