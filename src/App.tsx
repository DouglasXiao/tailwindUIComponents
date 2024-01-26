import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Calendar } from './components/ui/calendar'
import { Skeleton } from './components/ui/skeleton'

function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
      />
      <div>
        <Skeleton className="w-[300px] h-[60px] rounded-full" />
      </div>
    </>
  )
}

export default App
