import { useEffect, useState } from 'react'
import './App.css'
import { useWindowSize } from './useWindowSize'

function App() {

  const [subtitle, setSubtitle] = useState("Vite + React + TS")
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    document.title = "Vite + React + TS"
    setSubtitle('哈哈')
  }, []);

  useEffect(() => {
    setCount(count + 1)
  }, []);

  useEffect(()=> {
    setTotal(count * 5)
  }, [count]);

  useEffect(() => {
    const timer = setInterval(()=>{
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, []);

  const [size] = useWindowSize()

  return (
    <div className="App">
      <p>欢迎学习React后台管理课程</p>
      <span>{ subtitle }</span>
      <span>Count is { count } and Total is {total}</span>
      <p> document width is { size.width } and height is { size.height } </p>
    </div>
  )
}

export default App
