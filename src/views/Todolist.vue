<template>
    <div class="container border rounded mt-3 p-5" style="max-width: 800px;">
        <h3  class="text-center">功能</h3>
        <ol class="list-group">
            <app-todo  v-for="todo in todoLists.data" :todo="todo"></app-todo>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <input class="form-control form-control-sm" type="text" v-model="newTodo.content">
                <button class="btn btn-dark btn-sm" @click.prevent="addTodo">Add</button>
            </li>
        </ol>
    </div>
</template>

<script>
import Todo from "../components/Todo.vue"
export default{
    components:{
        appTodo: Todo
    },
    data(){
        return{
            newTodo:{
                content:"",
                status:0
            },
            statusText:["未完成","進行中","已完成"]
        }
    },
    methods:{
        addTodo(){
            var temp = {
                content: this.newTodo.content,
                status:0
            }
            this.$store.state.todoList.data.push(temp);
            this.newTodo.content = "";
            //this.$router.push({path: "/products"});
        }
    },
    computed:{
        todoLists(){
            return this.$store.state.todoList;
        }
    }
}
</script>