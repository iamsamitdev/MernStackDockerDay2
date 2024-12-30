import { useState, useEffect } from 'react'
import './App.css'

// Example using React 19 features with useEffect
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  // Example using React 19 features with useEffect
  useEffect(() => {
    // Automatic batching demo
    setTimeout(() => {
      setCount(c => c + 1);
      setData({ message: 'Hello React 19!' });
    }, 1000);
  }, []);

  return (
    <>
      <h1>Hello Vite + React 19</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {data && <p>{data.message}</p>}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App