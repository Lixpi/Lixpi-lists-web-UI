import { writable } from 'svelte/store'

const users = []

export const usersData = writable(users)
