<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addItem="addItem" />
      <Main :itemList="itemList"> </Main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { nanoid } from 'nanoid';
export default {
  name: 'App',
  data() {
    return {
      itemList: [] // 事项列表
    };
  },
  components: { Header, Main, Footer },
  computed: {},
  methods: {
    addItem(e) {
      let obj = { id: nanoid(), value: e, checked: false }; // value todolist的事项，checked，是否完成
      this.itemList.push(obj);
    }
  },
  mounted() {
    // 监听当item组件改变事项的状态的时候，改变原始数据的状态
    this.$EventBus.$on('handleCheck', (id) => {
      this.itemList.find((item) => {
        if (item.id == id) {
          item.checked = !item.checked;
        }
      });
    });
  },
  beforeDestroy() {
    //销毁监听事件
    this.$EventBus.off('handleCheck');
  }
};
</script>

<style >
/*base*/
body {
  background: #fff;
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
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
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