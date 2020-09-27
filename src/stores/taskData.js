import { writable } from 'svelte/store'

const task = {
  title: ''
}

export const taskData = writable(task)
