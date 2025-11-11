import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <h2 class="mobile-heading">Home</h2>
        <p>This is all the content for my ITIS 3135 class</p>
      </main>
      <Footer/>
    </>
  )
}

export default App
