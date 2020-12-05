import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Header from './Header'
import Footer from './Footer'

const App = () => {



  return(
    <div>
      <Header></Header>
      <section>
        {/* <Route exact path="/" component={Header} /> */}
        <Route exact path="/" component={Home} />
      </section>
      <section>
        {/* <Route path="/contact" component={Header} /> */}
        <Route path="/contact" component={Contact} />
      </section>
      <section>
        {/* <Route path="/about" component={Header} /> */}
        <Route path="/about" component={About} />
      </section>
      <Footer></Footer>

    </div>
  )
}

export default App