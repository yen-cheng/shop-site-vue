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
                    <span class="badge badge-primary badge-pill mt-3 ml-5">進行中</span>
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
                            <select id="type" class="form-control">
                                <option value="1" selected>基本功能</option>
                                <option value="2">特色功能</option>
                                <option value="3">障害改善</option>
                            </select>
                        </div>
                        <div class="form-group col">
                            <label for="type">Status</label>
                            <select id="type" class="form-control">
                                <option value="0" selected>未進行</option>
                                <option value="1">進行中</option>
                                <option value="2">已完成</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <div class="btn-group" role="group" aria-label="buttonAction">
                        <button type="button" class="btn btn-sm btn-dark">切換狀態</button>
                        <button type="button" class="btn btn-sm btn-danger">刪除</button>
                    </div>
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
            $(elementId).modal('hide');
            this.$emit('saveChange',elementId);
        }
    }
}
</script>