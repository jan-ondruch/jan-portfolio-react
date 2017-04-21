import React from 'react'

import Box from './miscComponents/Box'
import Header from './miscComponents/Header'

const Programming = () => {
  let langs = [
    {lang: 'HTML5', color: '#fff176', proj: 'University & Side Projects & Work'},
    {lang: 'CSS3', color: '#80cbc4', proj: 'University & Side Projects'},
    {lang: 'Bootstrap3', color: '#aed581', proj: 'Side Projects'},
    {lang: 'JavaScript', color: '#ff8a65', proj: 'Side Projects'},
    {lang: 'ReactJS', color: '#a1887f', proj: 'Side Projects'},
    {lang: 'jQuery', color: '#81d4fa', proj: 'Side Projects'},
    {lang: 'NodeJS', color: '#4dd0e1', proj: 'Side Projects'},
    {lang: 'Webpack', color: '#e57373', proj: 'Side Projects'},
    {lang: 'SQL', color: '#81c784', proj: 'University'},
    {lang: 'Java', color: '#ba68c8', proj: 'University'},
    {lang: 'C', color: '#90a4ae', proj: 'University & Side Projects & Work'},
    {lang: 'BASH', color: '#f06292', proj: 'University & Side Projects & Work'},
  ]

  return (
    <div>
      <Header
        title="Programming"
        subtitle="What I can code."
      />
      <Box 
        langs={langs}
      />
    </div>
  )
}

export default Programming