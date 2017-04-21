import React from 'react'

import Header from './miscComponents/Header'
import MessageBox from './miscComponents/MessageBox'

const Contact = () => (
	<div>
		<Header
		  title="Contact"
		  subtitle="Hit me up!"
		/>
		<div style={{margin: 16}}>
			<MessageBox />
		</div>
  </div>
)

export default Contact