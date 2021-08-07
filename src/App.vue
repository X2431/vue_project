<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 头部 -->
        <Header :addTodo='add' />
        <!-- 列表 -->
        <List :todos='todoList' :upDateTodo='upDateTodo' :delTodo='delTodo'/>
        <!-- 底部 -->
        <Footer :todo='todoList' :checkAll='checkAll' :delAll='delAll' />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'
  import Footer from './components/Footer'
  export default {
    name: 'App',
    components: {
      Header,
      List,
      Footer
    },
    data() {
      return {
        todoList: [{
            id: 1,
            content: '打游戏',
            done: true
          },
          {
            id: 2,
            content: '要学习',
            done: false
          },
          {
            id: 3,
            content: '谈恋爱',
            done: true
          }
        ]
      }
    },
    methods: {
      add(obj) {
        this.todoList.unshift(obj);
      },
      upDateTodo(id, e) {
        this.todoList.forEach(function (item) {
          if (item.id === id) {
            item.done = e;
          }
        })
      },
      checkAll(bo) {
        this.todoList.forEach(function (item) {
          item.done = !bo;
        })
      },
      delTodo(id) {
        this.todoList.forEach(function (item, index, arr) {
          if (item.id == id) {
            arr.splice(index, 1);
          }
        })
      },
      delAll(){
        this.todoList.map((item,index,arr) => {
          if(item.done){
            arr.splice(index,1)
          }
        });
      }
    }
  }
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>