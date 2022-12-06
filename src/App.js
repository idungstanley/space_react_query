import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import People from './components/People'
import Planets from './components/Planets'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
function App() {
  const [page, setPage] = useState('planet')
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>Star wars info</h1>
        <Navbar setPage={setPage} />
        <div className='content'>
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
