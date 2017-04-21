import React from 'react'

import Code from 'material-ui/svg-icons/action/code'
import IconButton from 'material-ui/IconButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { GridList, GridTile } from 'material-ui/GridList'

export default class Box extends React.Component {

  render() {

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        margin: 16,
        overflowY: 'auto',
        padding: 0,
        width: '100vh',
      },
    }

    return (
      <div style={styles.root}>
        <MuiThemeProvider>
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
          {this.props.langs.map((tile) => (
            <GridTile
              style={{'background': tile.color}}
              key={tile.lang}
              title={tile.lang}
              subtitle={<span><b>{tile.proj}</b></span>}
              actionIcon={
                <IconButton 
                  tooltip={"#linkTo: "+tile.lang}
                  tooltipPosition="top-left" 
                  href="#/programming">
                    <Code color="white" />
                </IconButton>
              }
            >
            </GridTile>
          ))}
          </GridList>
        </MuiThemeProvider>
      </div>
    )
  }
}

Box.propTypes = {
  langs: React.PropTypes.array.isRequired, 
  // array containing data such as {lang: 'HTML5', color: '#22CCAA', proj: 'School, websites, thatone'}
}