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

const ideas = ref(["Migrate codebase to TypeScript"]);
const todos = ref(["Migrate codebase to TypeScript"]);
const inProgress = ref(["Migrate codebase to TypeScript", "lol"]);
const completed = ref([]);
const gg = ref(["LOL", "lol"]);


// const filteredTasks = computed(() => store.getters['tasksModule/filteredTasks'])
// const filterText = computed(() => store.state["tasksModule/filterText"])
// const addTask = (task) => store.dispatch('tasksModule/addTask', task)
// const editTask = (task) => store.dispatch('tasksModule/editTask', task)
// const deleteTask = (task) => store.dispatch('tasksModule/deleteTask', task)
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <h6>Idea 💡</h6>
        <draggable v-model="ideas" handle=".handle" class="draggable-list tasks" group="tasks">
          <template #item="{element: item}">
            <div class="item task">
              <h3 class="handle task__text"> {{ item }}</h3>
            </div>
          </template>
        </draggable>
      </div>
      <div class="column">
        <h6>Todo ✍</h6>
        <draggable v-model="todos" handle=".handle" class="draggable-list tasks" group="tasks">
          <template #item="{element: item}">
            <div class="item task">
              <h3 class="handle task__text"> {{ item }}</h3>
            </div>
          </template>
        </draggable>
      </div>
      <div class="column">
        <h6>In Progress 🗓</h6>
        <draggable v-model="inProgress" handle=".handle" class="draggable-list tasks" group="tasks">
          <template #item="{element: item}">
            <div class="item task">
              <h3 class="handle task__text"> {{ item }}</h3>
            </div>
          </template>
        </draggable>
      </div>
      <div class="column">
        <h6>Ready to go ✅</h6>
        <draggable v-model="completed" handle=".handle" class="draggable-list tasks" group="tasks">
          <template #item="{element: item}">
            <div class="item task">
              <h3 class="handle task__text"> {{ item }}</h3>
            </div>
          </template>
        </draggable>
      </div>
      <div class="column">
        <h6>Ready to go ✅</h6>
        <draggable v-model="gg" handle=".handle" class="draggable-list tasks" group="tasks">
          <template #item="{element: item}">
            <div class="item task">
              <h3 class="handle task__text"> {{ item }}</h3>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>




<style>
  .row {
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
    min-height: 300px;
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
  .draggable-list{
    height: 90%;
  }
</style>


<!--  },-->
<!--};-->
<!--</script>-->
