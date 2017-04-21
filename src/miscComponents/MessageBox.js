import React from 'react'

import Avatar from 'material-ui/Avatar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Card, CardHeader, CardTitle } from 'material-ui/Card'

let styles = {
  root: {
    margin: 'auto', 
    marginTop: 16, 
    maxWidth: 580,
    paddingBottom: 20,
  },
  card: {
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'space-around',
    marginTop: -8, 
    marginBottom: -16, 
    padding: 16, 
  },
}

const MessageBox = () => (
	<div style={styles.root}>
    <MuiThemeProvider>
      <div>
        <Card style={{marginBottom: 16}}>
  		    <CardTitle
    		    title="Send me a message!"
    		    subtitle="I am always open to your feedback or requests. 
    			   				  Send me a message with a new idea, suggestion or maybe an offer!"
  		    />
  		    <div style={{margin: 16}}>
  		      <TextField
  		      	fullWidth={true}
			        hintText="John Doe"
			        floatingLabelText="Your name"
			      />
            <br />
			      <TextField
			      	fullWidth={true}
			        hintText="johndoe@gmail.com"
			        floatingLabelText="E-mail"
			      />
			      <br />
			      <TextField
			      	fullWidth={true}
			        hintText="This is your message text"
			        floatingLabelText="Your message"
			        multiLine={true}
			      />
			    </div>
			    <div style={{padding: 16}}>
            <RaisedButton label="Submit" />
			    </div>
        </Card>
        <Card style={styles.card}>
          <Avatar size={30} style={{margin: 3, background: '#1565c0'}} src="./src/images/logo/facebook-box.png" />
          <Avatar size={30} style={{margin: 3, background: '#000000'}} src="./src/images/logo/github-circle.png" />
          <Avatar size={30} style={{margin: 3, background: '#f44336'}} src="./src/images/logo/instagram.png" />
          <Avatar size={30} style={{margin: 3, background: '#64b5f6'}} src="./src/images/logo/wordpress.png" />
          <Avatar size={30} style={{margin: 3, background: '#2196f3'}} src="./src/images/logo/vimeo.png" />
          <Avatar size={30} style={{margin: 3, background: '#9e9e9e'}} src="./src/images/logo/email-open-outline.png" />
        </Card>
      </div>
	  </MuiThemeProvider>
	</div>
)

export default MessageBox