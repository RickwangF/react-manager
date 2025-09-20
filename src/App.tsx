import {memo, useCallback, useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Child = memo(( { onClick }: any ) => {
  console.log('child called')
  return (
    <div>
      <p>
        我是一个Child节点
        <button onClick={onClick}>我是一个Child的按钮</button>
      </p>
    </div>
  )
})


function App() {
  const [count, setCount] = useState(0)

  const handleButtonClicked = () => {
    setCount(count + 1)
  }

  const total = () => {
    console.log('total called')
    const list = [1, 2, 3, 4, 5]
    return list.reduce((a, b) => a + b, 0)
  }

  const total2 = useMemo(
    () => {
      console.log('total2 called')
      const list = [1, 2, 3, 4, 5]
      return list.reduce((a, b) => a + b, 0)
    }
  , [])

  const handleChildClick  = useCallback(() => {
    console.log('child clicked')
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleButtonClicked}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>{total()}</p>
        <p>{total2}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Child onClick={handleChildClick}/>
    </>
  )
}

export default App
