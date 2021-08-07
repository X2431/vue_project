<template>
    <li 
      @mouseenter="isFlag = true"
      @mouseleave="isFlag = false"
    >
      <label>
        <input type="checkbox" :checked='todo.done' @click="upDateTodo(todo.id,$event.target.checked)"/>
        <span>{{todo.content}}</span>
      </label>
      <button class="btn btn-danger" v-show="isFlag" @click="delTodo(todo.id)">删除</button>
    </li>
</template>

<script>
  export default {
    name: 'Item',
    props: ['todo','upDateTodo','delTodo'],
    data(){
      return {
        isFlag : false
      }
    },methods:{
      del:function(i){
        this.delTodo(i);
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
  
  li:hover{
    background-color: rgb(219, 217, 217);
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }


</style>