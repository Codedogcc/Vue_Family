<template>
  <ul class="todo-main">
    <Item v-for="item in itemList" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import Item from './Item';
export default {
  name: 'Main',
  data() {
    return {
      name: '尚硅谷atguigu',
      address: '北京'
    };
  },
  components: { Item },
  props: ['itemList'],
  methods: {
    confirm(e) {
      if (e.keyCode == 13) {
      }
    }
  }
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
}
</style>