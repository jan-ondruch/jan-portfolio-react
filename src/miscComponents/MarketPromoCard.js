import React from 'react'

import Code from 'material-ui/svg-icons/action/code'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

let styles = {
	root: {
		width: '120vh',
		margin: 8,
		overflow: 'hidden',
	},
}

const MarketPromoCard = (props) => (
	<MuiThemeProvider>
	  <Card style={styles.root}>
			<CardHeader
			  title={props.title[0]}
			  subtitle={props.subtitle[0]}
			  avatar={props.avatar} 
			/>
			<CardTitle 
				title={props.title[1]} 
				subtitle={props.subtitle[1]} 
			/>
			<CardText>
			  {props.text}
			</CardText>
			<CardActions>
			  <RaisedButton 
			  	label="More Projects"
			  />
	  	</CardActions>
		</Card>
	</MuiThemeProvider>
)

export default MarketPromoCard