import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'

// const propTypes = {
//   // Props injected by SpeechRecognition
//   transcript: PropTypes.string,
//   resetTranscript: PropTypes.func,
//   browserSupportsSpeechRecognition: PropTypes.bool
// }

class Dictaphone extends Component {
  render() {
    const { transcript, startListening, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
       <button onClick={startListening}>start</button>
        <button onClick={resetTranscript}>Reset</button>
        <span>{this.props.handleVoiceText(transcript)}</span>
      </div>
    )
  }
}
const options = {
    autoStart: false
  }
//Dictaphone.propTypes = propTypes
export default SpeechRecognition(options)(Dictaphone)