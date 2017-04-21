import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

let styles = {
  image: {
    height: '86vh',
    objectFit: 'none',
    overflow: 'hidden',
  },
}

const Profile = () => (
  <MuiThemeProvider>
    <Card>
      <CardMedia
        overlay={
          <CardTitle
            style={{textAlign: 'justify'}} 
            title="Profile" 
            subtitle="Hi. I’m Jan and this is my personal website. 
                      I am a life enthusiast eager to learn new skills, 
                      passionate about meeting new people and exchanging 
                      ideas with them. I study Information Technology at 
                      Brno University of Technology in Brno (CZE), 
                      currently participating in Erasmus+ program at 
                      Hochschule Furtwangen in Furtwangen (GER)." 
          />
        }
      >
        <img src="./src/images/profile.jpg" style={styles.image} />
      </CardMedia>
    </Card>
  </MuiThemeProvider>
)

export default Profile