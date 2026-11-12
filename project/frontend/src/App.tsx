import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './app/dashboard/dashboard'
import Products from './app/dashboard/products/page'
import Categories from './app/dashboard/categories/page'
import StockMovement from './app/dashboard/stock-movements/page'
import DashboardHome from './app/dashboard/dashboardHome'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
     <Route  path='/dashboard' element={<Dashboard />}>
      <Route index element={<DashboardHome />} />
      <Route path='products' element={<Products />} />
      <Route path='categories' element={<Categories />} />
      <Route path='stock-movements' element={<StockMovement />}/>
    </Route>
   </Routes>
   </BrowserRouter>
    
  )
}

export default App