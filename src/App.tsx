import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import InputForm from './InputForm'
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
    setValue('')
  }

  return (
    <QueryClientProvider client={queryClient}>
      <InputForm handleRandomNumber={handleRandomNumber} value={value} onChange={onChange} />
      <Poster randomNumber={randomNumber} value={value} />
    </QueryClientProvider>
  )
}

export default App
