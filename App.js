import React from 'react'

import Footer from './src/miscComponents/Footer'
import Navigation from './src/miscComponents/Navigation'

const App = (props) => {
  let style = {
  	padding: '5px',
    textAlign: 'center',
    margin: '0',
    backgroundColor: '#FFFFFF'
  }

  return (
  	<div>
  		<Navigation />
  		{props.children}
      <Footer />
    </div>
  )
}

export default App