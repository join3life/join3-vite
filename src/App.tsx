import { useRoutes } from 'react-router-dom'

import Header from '@/components/Header'
import routes from '@/router'

function App() {
  return (
    <div className="App">
      <Header />
      {useRoutes(routes)}
    </div>
  )
}

export default App
