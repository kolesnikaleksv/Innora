import './app.scss'
import Header from '../Header/Header'
import Sidebar from '../SideBar/Sidebar'
import NavigationMenu from '../NavigationMenu/NavigationMenu'

function App() {
  return (
    <div className='app'>
      <Header />
        <div className='app__body'>
          <Sidebar />
          <NavigationMenu />
        </div>
    </div>
  )
}

export default App
