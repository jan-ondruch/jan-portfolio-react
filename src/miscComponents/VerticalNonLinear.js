import React from 'react'

import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper'

export default class VerticalNonLinear extends React.Component {

	constructor() {
		super()
		this.state = {stepIndex: 0}
		this.handleNext = this.handleNext.bind(this)
		this.handlePrev = this.handlePrev.bind(this)
		this.renderStepActions = this.renderStepActions.bind(this)
	}

  handleNext() {
    const {stepIndex} = this.state
    if (stepIndex < 6) {
      this.setState({stepIndex: stepIndex + 1})
    }
  }

  handlePrev() {
    const {stepIndex} = this.state
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1})
    }
  }

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step < 6 && (<RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        )}
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    )
  }

	render() {

		const {stepIndex} = this.state

		return (
			<MuiThemeProvider>
    		<div style={{maxWidth: 580, margin: 'auto ', paddingBottom: 20}}>
          <Stepper
            activeStep={stepIndex}
            linear={false}
            orientation="vertical"
          >
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 0})}>
                Welcome to my world!
              </StepButton>
              <StepContent>
                <p>
                  There is no huge difference between work and leisure time for me.
                  Therefore, one could say I spend most of my day working, or maybe
                  I spend it just having fun. Let's look at some of the activities 
                  I love doing so much!
                </p>
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 1})}>
                Sports
              </StepButton>
              <StepContent>
                <p>
               		Fitness, snowboarding, team sports, dancing, ... 
               		Especially dancing has been huge for me lately 
               		(contemporary dance, street dance, ballroom dancing).
                </p>
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 2})}>
                Reading
              </StepButton>
              <StepContent>
                <p>
                  Books mostly focued on psychology, marketing, programming, philosophy 
                  or personal development. Go to bed a bit smarter every day!
                </p>
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 3})}>
                Music
              </StepButton>
              <StepContent>
                <p>
                  Playing piano or guitar every day!
                </p>
                {this.renderStepActions(3)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 4})}>
                Events
              </StepButton>
              <StepContent>
                <p>
                  I love meeting people, getting to know new people on various events. 
                  I love organizing them, as well. Talking to people and being around 
                  them is a huge passion of mine - I mean, learning about humans.
                </p>
                {this.renderStepActions(4)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 5})}>
                Travelling
              </StepButton>
              <StepContent>
                <p>
                  When possible, get out! I have been doing this at least 4 times a year.
                </p>
                {this.renderStepActions(5)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 6})}>
                Learning
              </StepButton>
              <StepContent>
                <p>
                  This one is a sort of "superset" for everything mentioned before. 
                  You can learn from everything and everyone. I can't even emphasize
                  how important it is to me.
                </p>
                {this.renderStepActions(6)}
              </StepContent>
            </Step>
          </Stepper>
        </div>
  		</MuiThemeProvider>
		)
	}
}