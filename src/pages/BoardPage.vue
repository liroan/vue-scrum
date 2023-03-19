<script setup>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import draggable from "vuedraggable";
const store = useStore()

const columns = ref(
    [
      { id: 0, text: 'Бэклог' },
      { id: 1, text: 'Надо сделать' },
      { id: 2, text: 'В работе' },
      { id: 3, text: 'Проверка' },
      { id: 4, text: 'Сделано' },
    ]
);


const filteredTasks = computed(() => store.getters['tasksModule/filteredTasks'])
// const filterText = computed(() => store.state["tasksModule/filterText"])
// const addTask = (task) => store.dispatch('tasksModule/addTask', task)
// const editTask = (task) => store.dispatch('tasksModule/editTask', task)
// const deleteTask = (task) => store.dispatch('tasksModule/deleteTask', task)
</script>

<template>
  <h1 class="">Scrum Board</h1>
  <div class="columns">
    <div
        v-for="column in columns"
        :key="column.id"
        class="column"
    >
      <h2 class="column__title">{{ column.text }}</h2>
      <div class="tasks">
        <draggable v-model="filteredTasks" handle=".handle" class="tasks">
          <template #item="{element: item}">
            <div class="item task">
              <h3 class="handle task__text"> {{ item.text }}</h3>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>


<!--<script>-->
<!--import {computed, ref} from "vue";-->
<!--  import { useStore } from 'vuex';-->
<!--  import draggable from "vuedraggable";-->
<!--  export default {-->
<!--    setup() {-->
<!--      const store = useStore()-->

<!--      const columns = ref(-->
<!--          [-->
<!--            { id: 0, text: 'Бэклог' },-->
<!--            { id: 1, text: 'Надо сделать' },-->
<!--            { id: 2, text: 'В работе' },-->
<!--            { id: 3, text: 'Проверка' },-->
<!--            { id: 4, text: 'Сделано' },-->
<!--          ]-->
<!--      );-->

<!--      const list = ref(["First Item", "Second Item", "Third Item"])-->

<!--      const filteredTasks = computed(() => store.getters['tasksModule/filteredTasks'])-->
<!--      const filterText = computed(() => store.state["tasksModule/filterText"])-->
<!--      const addTask = (task) => store.dispatch('tasksModule/addTask', task)-->
<!--      const editTask = (task) => store.dispatch('tasksModule/editTask', task)-->
<!--      const deleteTask = (task) => store.dispatch('tasksModule/deleteTask', task)-->

<!--      return {-->
<!--        columns,-->
<!--        filteredTasks,-->
<!--        filterText,-->
<!--        addTask,-->
<!--        editTask,-->
<!--        deleteTask,-->
<!--        list,-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--</script>-->



<style>
  .columns {
    display: flex;
    overflow-x: auto;
    gap: 20px;
  }
  .column {
    min-width: 200px;
    width: 20%;
    border: 1px solid teal;
    padding: 10px 20px;
    background: #eee;
    border-radius: 4px;
  }
  .column__title {
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 18px;
  }
  .tasks {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .task {
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
  }
  .task__text {
    font-weight: 300;
    font-size: 16px;
  }
</style>

<!--<template>-->
<!--  <main>-->
<!--    <div>-->

<!--      <draggable-->
<!--          :list="list"-->
<!--          item-key="name"-->
<!--          class="list-group"-->
<!--          ghost-class="ghost"-->
<!--          @start="dragging = true"-->
<!--          @end="dragging = false"-->
<!--      >-->
<!--        <template #item="{ element }">-->
<!--          <div class="list-group-item">-->
<!--            {{ element }}-->
<!--          </div>-->
<!--        </template>-->
<!--      </draggable>-->
<!--    </div>-->
<!--  </main>-->
<!--</template>-->
<!--<script>-->
<!--import draggable from "vuedraggable";-->
<!--export default {-->
<!--  components: {-->
<!--    draggable,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      list: ["First Item", "Second Item", "Third Item"],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
