
// import PublicIndex from './views/public/index.svelte'
import Layout from './views/layouts/layout.svelte'

import Login from './pages/login.svelte'
import Logout from './pages/logout.svelte'
import Tasks from './pages/tasks/tasks.svelte'
import Task from './pages/tasks/task.svelte'
import TaskCreate from './pages/tasks/taskCreate.svelte'
import Projects from './pages/projects/projects.svelte'
import NotFound from './pages/404.svelte'

// import AdminLayout from './views/admin/layout.svelte'
// import AdminIndex from './views/admin/index.svelte'
// import EmployeesIndex from './views/admin/employees/index.svelte'

// function userIsAdmin() {
//   //check if user is admin and returns true or false
// }

const routes = [
  {
    name: '/',
    component: Layout,
  },
  { name: 'login', component: Login, layout: Layout },
  { name: 'login', component: Logout, layout: Layout },
  { name: 'tasks', component: Tasks, layout: Layout,
    nestedRoutes: [
      {
        name: 'show/:key',
        nestedRoutes: [{ name: 'index', component: Task }]
      },
      {
        name: 'create',
        nestedRoutes: [{ name: 'index', component: TaskCreate }]
      }
    ]
  },
  { name: 'task/:key', component: Task, layout: Layout },
  { name: 'projects', component: Projects, layout: Layout },
  { name: '404', path: '404', component: NotFound }
  // {
  //   name: 'admin',
  //   component: AdminLayout,
  //   onlyIf: { guard: userIsAdmin, redirect: '/login' },
  //   nestedRoutes: [
  //     { name: 'index', component: AdminIndex },
  //     {
  //       name: 'employees',
  //       component: '',
  //       nestedRoutes: [
  //         { name: 'index', component: EmployeesIndex },
  //         { name: 'show/:id', component: EmployeesShow },
  //       ],
  //     },
  //   ],
  // },
]

export { routes }
