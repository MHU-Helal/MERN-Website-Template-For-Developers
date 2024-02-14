import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-center p-5 text-4xl font-bold uppercase text-white'>React Website Basic Templates</h1>
        <p className='text-center'>This template contains the necessary packages and files that a developer needs to start building his/her coding.</p>

        <div className='text-center mt-5 w-52 bg-slate-500 mx-auto'>
        <h2 className='text-white text-2xl py-2'>Installed Packages:</h2>
        <ul className='ml-5 text-left'><li>"Autoprefixer": "^10.4.17"
            </li>
            <li>"Daisyui": "^4.7.0"</li>
            <li>"Postcss": "^8.4.35"</li>
            <li>"Tailwindcss": "^3.4.1"</li>
            <li>"React": "^18.2.0"</li>
            <li>Express": "^4.18.2</li>
            <li>"React-dom": "^18.2.0"</li>
            <li>"React-Icons": "^18.2.0"</li>
            <li>"React-Router-Dom": "^18.2.0"</li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default App
