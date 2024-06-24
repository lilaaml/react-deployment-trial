import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResultsList from './components/SearchResultsList'

function App() {
  const [results, setResults] = useState([])

  return (
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <form role="search" className="d-flex">
            <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          </div>
          </nav> */}

      <div className="searchbar-container">
          {/* <form role="search" className="d-flex">
            <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form> */}
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
      </div>
    </div>
  )
}

export default App
