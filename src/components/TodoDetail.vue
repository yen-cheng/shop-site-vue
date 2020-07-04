<template>
    <div>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 v-if="!contentEdit" 
                        @click="contentEdit = true"
                        class="modal-title">{{todoDetail.content}}</h5>
                    <input v-model="todoDetail.content"
                            @blur="contentEdit = false" 
                            v-else 
                            v-focus 
                            class="form-control" 
                            type="text">
                    <span v-if="todoDetail.status=='0'" class="badge badge-secondary badge-pill mt-3 ml-5">未完成</span>
                    <span v-else-if="todoDetail.status=='1'" class="badge badge-primary badge-pill mt-3 ml-5">進行中</span>
                    <span v-else="todoDetail.status=='2'" class="badge badge-success badge-pill mt-3 ml-5">已完成</span>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div v-if="!detailEdit" @click="detailEdit = true">
                        <p>{{todoDetail.detail}}</p>
                        <p class="samll text-muted">クリックして編集</p>
                    </div>
                    <textarea v-model="todoDetail.detail"
                            @blur="detailEdit = false" 
                            v-focus
                            v-else
                            cols="60" rows="4"></textarea>
                    <div class="row">
                        <div class="form-group col">
                            <label for="type">Type</label>
                            <select v-model="todoDetail.type" id="type" class="form-control">
                                <option value="1" :selected="todoDetail.type=='1'">基本功能</option>
                                <option value="2" :selected="todoDetail.type=='2'">特色功能</option>
                                <option value="3" :selected="todoDetail.type=='3'">障害改善</option>
                            </select>
                        </div>
                        <div class="form-group col">
                            <label for="type">Status</label>
                            <select v-model="todoDetail.status" id="type" class="form-control">
                                <option value="0" :selected="todoDetail.status=='0'">未進行</option>
                                <option value="1" :selected="todoDetail.status=='1'">進行中</option>
                                <option value="2" :selected="todoDetail.status=='2'">已完成</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-sm btn-danger">刪除</button>
                    <div>
                        <button type="button" class="btn btn-secondary mr-1" data-dismiss="modal">Close</button>
                        <button @click="saveChange" type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default{
    props:["todo"],
    data(){
        return{
            todoDetail: this.todo,
            contentEdit:false,
            detailEdit:false
        }
    },
    directives: {
        focus: {
            inserted (el) {
                el.focus()
            }
        }
    },
    methods:{
        saveChange(){
            const elementId = '#todoDetailModal'+this.todoDetail.id;
            console.log(this.todoDetail);
            const putUrl = "/admin/todolist/" + this.todoDetail.id;
            axios.put(putUrl, this.todoDetail)
            .then(res => {
                console.log("Edit todo success!");
                this.$emit("invokeReloadTodo");
            })
            .catch(err => {
                console.log(err);
            })
            $(elementId).modal('hide');
        }
    }
}
</script>