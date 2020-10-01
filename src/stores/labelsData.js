import { writable } from 'svelte/store'

const labels = []

export const labelsData = writable(labels)
