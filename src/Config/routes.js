import Ingredients from 'containers/ingredients'
import Outlets from 'containers/outlets'
import Users from 'containers/users'
import Login from '../containers/login'
import Logout from '../containers/logout'
import Main from 'containers/main'

import { ADMIN, MANAGER, EMPLOYEE } from './roles'

const routes =[  
  {
    path:'/ingredients',
    component: Ingredients,    
    availableTo: [ ADMIN ]
  },
  {
    path:'/users',
    component: Users,    
    availableTo: [ ADMIN ]
  },
  {
    path:'/outlets',
    component: Outlets,    
    availableTo: [ ADMIN, MANAGER, EMPLOYEE ]
  },
  {
    path:'/login',
    component: Login,  
    availableTo: [],  
  },
  {
    path:'/logout',
    component: Logout,  
    availableTo: [],  
  },
  {  
    path:'/',
    component: Main,
    availableTo: [],
  },
]

export default routes