import { writable } from 'svelte/store'

const versions = []

export const versionsData = writable(versions)
