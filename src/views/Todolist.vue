<template>
    <div class="container border rounded mt-3 p-5" style="max-width: 1000px;">
        <div class="row justify-content-md-center">
            <div class="col-10">
                <nav>
                    <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-basic-tab" data-toggle="tab" href="#nav-basic" role="tab" aria-controls="nav-home" aria-selected="true">基本功能</a>
                        <a class="nav-item nav-link" id="nav-feature-tab" data-toggle="tab" href="#nav-feature" role="tab" aria-controls="nav-profile" aria-selected="false">特色功能</a>
                        <a class="nav-item nav-link" id="nav-complete-tab" data-toggle="tab" href="#nav-complete" role="tab" aria-controls="nav-profile" aria-selected="false">完成功能</a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-basic" role="tabpanel" aria-labelledby="nav-basic-tab">
                        <ol class="list-group">
                            <app-todo  v-for="todo in todoLists" :todo="todo" @reload="reloadTodo"></app-todo>
                        </ol>
                    </div>
                    <div class="tab-pane fade" id="nav-feature" role="tabpanel" aria-labelledby="nav-feature-tab">...</div>
                    <div class="tab-pane fade" id="nav-complete" role="tabpanel" aria-labelledby="nav-complete-tab">complete</div>
                </div>
            </div>
        </div>
        <div class="row mt-5 justify-content-center">
            <div class="col-3 text-center">
                <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#addTodoModal">
                Add
                </button>
            </div>
        </div>
        <add-todo @reload="reloadTodo" class="modal fade" id="addTodoModal" tabindex="-1" role="dialog" aria-labelledby="addTodoModalLabel" aria-hidden="true"></add-todo>
    </div>
</template>

<script>
import Todo from "../components/Todo.vue"
import AddTodo from "../components/AddTodo.vue"

import axios from "axios"

export default{
    created(){
        axios.get("/admin/todolists")
            .then(res => {
                console.log(res);
                this.todoLists = res.data.data;
            })
            .catch(err => {
                console.log(err);
            })
    },
    components:{
        appTodo: Todo,
        addTodo: AddTodo
    },
    data(){
        return{
            todoLists:[]
        }
    },
    methods:{
        reloadTodo(){
            axios.get("/admin/todolists")
            .then(res => {
                console.log(res);
                this.todoLists = res.data.data;
                console.log(this.todoLists);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>