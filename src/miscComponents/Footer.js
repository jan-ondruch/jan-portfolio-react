import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

let styles = {
	card: {
		background: '#4fc3f7', 
		display: 'flex', 
		flexWrap: 'wrap', 
		justifyContent: 'space-around', 
		textAlign: 'justify',
	},
}

const Footer = () => (
  <MuiThemeProvider>
    <Card zDepth={0} style={styles.card}>
    	<CardText style={{paddingBottom: 8}}>
    		This webpage has been created using NodeJS (npm, Webpack) | HTML5 | 
    		ReactJS (react-router, react-bootstrap) | Material-ui. By Jan Ondruch, 12/2016.
    	</CardText>
    </Card>
  </MuiThemeProvider>
)

export default Footer