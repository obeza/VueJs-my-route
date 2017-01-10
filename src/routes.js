import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/404' 

export default {
  mode: 'history',
  base: __dirname,
  routes:[
    {
      path:'/', 
      component: Home    
    },
    {
      path:'/about', 
      component: About    
    },
    {
      path:'*', 
      component: Error404    
    }
  ]

}