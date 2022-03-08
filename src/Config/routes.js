import Ingredients from 'containers/Ingredients'
import Outlets from 'containers/Outlets'
import Login from '../Login'
import Main from 'containers/Main'

import { ADMIN, MANAGER, EMPLOYEE } from './roles'

const routes =[  
  {
    path:'/ingredients',
    component: Ingredients,    
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
    path:'/',
    component: Main,
    availableTo: [],
  },
]

export default routes