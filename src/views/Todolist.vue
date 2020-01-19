<template>
    <div class="container border rounded mt-3 p-5" style="max-width: 800px;">
        <h3  class="text-center">功能</h3>
        <ol class="list-group">
            <app-todo  v-for="todo in todoLists" :todo="todo" @reload="reloadTodo"></app-todo>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <input class="form-control form-control-sm" type="text" v-model="newTodo.content">
                <button class="btn btn-dark btn-sm" @click.prevent="addTodo">Add</button>
            </li>
        </ol>
    </div>
</template>

<script>
import Todo from "../components/Todo.vue"
import axios from "axios"
export default{
    created(){
        axios.get("/admin/todolists")
            .then(res => {
                console.log(res);
                this.todoLists = res.data.todoLists;
            })
            .catch(err => {
                console.log(err);
            })
    },
    components:{
        appTodo: Todo
    },
    data(){
        return{
            newTodo:{
                content:"",
                status:0
            },
            todoLists:[]
        }
    },
    methods:{
        addTodo(){
            var temp = {
                content: this.newTodo.content,
                status:0
            }
            axios.post("/admin/todolist",temp)
                .then(res => {
                    console.log(this.todoLists);
                    this.todoLists.push(temp);
                })
                .catch(err => console.log(err));
            this.newTodo.content = "";
        },
        reloadTodo(){
            axios.get("/admin/todolists")
            .then(res => {
                console.log(res);
                this.todoLists = res.data.todoLists;
                console.log(this.todoLists);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>