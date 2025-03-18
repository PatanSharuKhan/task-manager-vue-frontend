<script setup>
  import { useTasksStore } from '@/stores/tasks';
import { ref } from 'vue'

  const tasks = useTasksStore()
  const newTaskTitle = ref('')
  const handleTitleChange = (e) => {
    e.preventDefault()
    newTaskTitle.value = e.target.value
  }
</script>

<template>
  <div class="tasks">
    <h1>This is tasks page</h1>
    <input type="text" name="taskTitle" placeholder="Enter the task" id="taskTitle" v-on:change="handleTitleChange"/>
    <button v-on:click="tasks.addTask()">Add Task</button>
    <ul>
      <li v-for="task in tasks.tasks">{{ task.title }}</li>
    </ul>
    <!-- If no tasks found -->
    <p v-if="tasks.tasks.length === 0">No tasks found</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .tasks {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
