<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isChecked" @click="checkAll(isChecked)"/>
    </label>
    <span>
      <span>已完成{{done}}</span> / 全部{{all}}
    </span>
    <button class="btn btn-danger" @click="delAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data(){
      return{
        isChecked:false
      }
    },
    props: ['todo','checkAll','delAll'],
    computed:{
      done:function (){
        let num =0;
        this.todo.forEach(item => {
          if(item.done){
            num++;
          }
        });
        return num;
      },
      all:function (){
        return this.todo.length;
      }
    }
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>