import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import InputForm from './InputForm'
import { jsonLocalStorage } from './lib/storage'
import Poster from './Poster'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  const [randomNumber, setRandomNumber] = useState(0)
  const [value, setValue] = useState('')

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 20))
    jsonLocalStorage.setItem('movie-title', value)
    setValue('')
  }

  useEffect(() => {
    jsonLocalStorage.clear()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <InputForm handleRandomNumber={handleRandomNumber} value={value} onChange={onChange} />
      <Poster randomNumber={randomNumber} />
    </QueryClientProvider>
  )
}

export default App
