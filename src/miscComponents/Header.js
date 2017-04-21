import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardHeader, CardTitle } from 'material-ui/Card'

let styles = {
	card: {
		background: '#4fc3f7',
		boxShadow: '0 0 2px 0',
	},
}

const Header = (props) => (
  <MuiThemeProvider>
    <Card zDepth={0} style={styles.card}>
      <CardTitle
        title={props.title}
        subtitle={props.subtitle}
      />
    </Card>
  </MuiThemeProvider>
)

export default Header