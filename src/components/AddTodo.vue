<template>
    <div>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">New Todo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-row">
                            <div class="form-group col">
                                <label for="content">Content</label>
                                <input v-model="newTodo.content" type="text" class="form-control" id="content">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <label for="detail">Detail</label>
                                <textarea v-model="newTodo.detail" id="detail" class="form-control" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <label for="type">Type</label>
                                <select v-model="newTodo.type" id="type" class="form-control">
                                    <option value="1" selected>基本功能</option>
                                    <option value="2">特色功能</option>
                                    <option value="3">障害改善</option>
                                </select>
                            </div>
                            <div class="form-group col">
                                <label for="type">Status</label>
                                <select v-model="newTodo.status" id="type" class="form-control">
                                    <option value="0" selected>未進行</option>
                                    <option value="1">進行中</option>
                                    <option value="2">已完成</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="addTodo" type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            newTodo:{
                content: "",
                detail: "",
                type: "",
                status:""
            }
        }
    },
    methods:{
        addTodo(){
            var temp = {
                content: this.newTodo.content,
                detail: this.newTodo.detail,
                type: this.newTodo.type,
                status:this.newTodo.status
            };
            axios.post("/admin/todolist",temp)
                .then(res => {
                    this.newTodo.content = "";
                    this.newTodo.detail = "";
                    this.newTodo.type = "";
                    this.newTodo.status = "";
                    this.$emit("reload");
                })
                .catch(err => console.log(err));
        }
    }
}
</script>