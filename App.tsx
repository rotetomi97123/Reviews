import Reviews from './reviews'
import './App.css'

function App() {
 
  return (
    <div className="App">
      <div className='nav'>
        <div className='title'>
          <h1>Our Reviews</h1>
        </div>
        <div className='underline'></div>
      </div>
      
      <div className='main-box'>
        <div className='box'>
          <Reviews/>
        </div>
      </div>
    </div>
  )
}

export default App
