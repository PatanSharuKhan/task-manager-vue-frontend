import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Task {
    id: number
    title: string
    completed: boolean
}

const TASKS: Task[] = [
    {id: 1, title: 'Learn HTML', completed: false},
    {id: 2, title: 'Learn CSS', completed: false},
    {id: 3, title: 'Learn JS', completed: false}
]

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>(TASKS)

  function addTask() {
    tasks.value.push({id: tasks.value.length + 1, title: `Learn Vue ${tasks.value.length + 1}`, completed: false})
  }

  function markTask(id: number) {
    tasks.value = tasks.value.map(task => {
        if(task.id === id) {
            task.completed = !task.completed
            return task
        }
        return task
    })
  }

  function removeTask(id: number) {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }

  return { tasks, addTask, markTask, removeTask }
})
