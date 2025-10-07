import './App.css'

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Hi 👋</h1>
      <p>Welcome to my CV page!</p>

      {/* Example sections */}
      <section>
        <h2>About Me</h2>
        <p>I am a computer science student building my portfolio.</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>JavaScript / React</li>
          <li>HTML / CSS</li>
          <li>Python</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: yourname@example.com</p>
      </section>
    </div>
  )
}

export default App
