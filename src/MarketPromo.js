import React from 'react'

import Header from './miscComponents/Header'
import MarketPromoCard from './miscComponents/MarketPromoCard'

let styles = {
	root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowY: 'auto',
    margin: 8,
  },
}

let cardData = {
	graphic: {
		title: "Graphic Design",
    subtitle: "Adobe Photoshop, GIMP, Inkscape",
    avatar: "./src/images/crop_tiles.png",
    text: "The AT&T Intranet design was inspired by Material design design language with the emphasis on simplicity and usability",
    project: "AT&T Intranet Design",
    projDesc: "Internship project summer 2015",
	},
	video: {
		title: "Video",
    subtitle: "Promotion clips, storytelling, films",
    avatar: "./src/images/jan_camera.jpg",
    text: "2000+ views on Facebook generating 50+ new subscribers (friends) on David’s portfolio, making him locally known in town for being a great photographer.",
    project: "PIXPHO Photographer",
    projDesc: "Photographer promotion video",
	},
	social: {
		title: "Social Media",
    subtitle: "Advertising, psychology, management",
    avatar: "./src/images/jan_balcony.png",
    text: "Social sites marketing & management, know-how of current trends and needs.",
    project: "Personal Promotion",
    projDesc: "Presentation of myself",
	},
}

const MarketPromo = () => (
  <div>
  	<Header
      title="Marketing & Promotion"
      subtitle="I can help you around here, too."
    />
    <div style={styles.root}>
    	<MarketPromoCard 
    		title={[cardData.graphic.title, cardData.graphic.project]}
    		subtitle={[cardData.graphic.subtitle, cardData.graphic.projDesc]}
    		avatar={cardData.graphic.avatar}
    		text={cardData.graphic.text}
    	/>
    	<MarketPromoCard 
    		title={[cardData.video.title, cardData.video.project]}
    		subtitle={[cardData.video.subtitle, cardData.video.projDesc]}
    		avatar={cardData.video.avatar}
    		text={cardData.video.text}
    	/>
    	<MarketPromoCard 
    		title={[cardData.social.title, cardData.social.project]}
    		subtitle={[cardData.social.subtitle, cardData.social.projDesc]}
    		avatar={cardData.social.avatar}
    		text={cardData.social.text}
    	/>
    </div>
  </div>
)

export default MarketPromo