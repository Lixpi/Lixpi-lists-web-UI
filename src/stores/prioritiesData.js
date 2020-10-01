import { writable } from 'svelte/store'

const priorities = []

export const prioritiesData = writable(priorities)
