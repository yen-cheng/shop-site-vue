<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        {{todo.content}}
        <div>
            <span class="badge badge-primary badge-pill mr-3">進行中</span>
            <div class="btn-group" role="group" aria-label="buttonAction">
                <button type="button" class="btn btn-sm btn-dark badge-pill" 
                    data-toggle="modal" 
                    :data-target="'#todoDetailModal'+id">
                    詳細</button>
                <button type="button" class="btn btn-sm btn-dark">切換狀態</button>
                <button type="button" class="btn btn-sm btn-danger" @click="deleteTodo">刪除</button>
            </div>
        </div>
        <todo-detail :todo="todo"
                    class="modal fade" 
                    :id="'todoDetailModal'+id"
                    @saveChange="saveChange" 
                    tabindex="-1" role="dialog" 
                    aria-labelledby="todoDetailModalLabel" 
                    aria-hidden="true"></todo-detail>
    </li>
</template>

<script>
import TodoDetail from "../components/TodoDetail.vue"

import axios from "axios"
import $ from 'jquery'

export default{
    components:{
        todoDetail:TodoDetail
    },
    props:["todo"],
    data(){
        return{
            id: this.todo.id
        }
    },
    methods:{
        deleteTodo(){
            axios.delete("/admin/todolist/" + this.todo.id)
                .then(res => {
                    console.log("delete todo success!");
                    this.$emit("reload");
                })
                .catch(err => console.log(err));
        },
        saveChange(id){
            //$(id).modal('hide');
            console.log("its work")
        }
    }
}
</script>