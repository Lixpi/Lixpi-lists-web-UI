import { writable } from 'svelte/store'

const statuses = []

export const statusesData = writable(statuses)
