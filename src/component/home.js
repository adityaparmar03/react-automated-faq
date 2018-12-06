import React, {PropTypes,Component} from 'react';
import '../css/home.css';
import ChatBot from 'react-simple-chatbot';
import Nav from './nav';
import TextChat from './text';  
import SpeechRecognition from 'react-speech-recognition'
import service from '../service/service'
import {
        Accordion,
        AccordionItem,
        AccordionItemTitle,
        AccordionItemBody,
    } from 'react-accessible-accordion';
    
    // Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Loader from './loader';

class Home extends Component {
        constructor(props){
                super(props);
                this.state = {
                chatbox:false,  
                start:false,
                apiKey:"sjsu",
                top:10,
                qna:[],
                question:"",
                on:false    
                }
             }
 
handleVoiceText(question){
        this.setState({
                question:question
        })
} 
handleChange(e){
        let question = e.target.value;
        this.setState({
                question:question
        })
} 

handleSerach(event){
        if(event.key == 'Enter'){
                var self = this;
                this.setState({
                        on:true
                })
        
                        service.getAnswer(
                                this.state.apiKey,
                                this.state.top,
                                this.state.question,
                                function(response){
        
                                        console.log(response)
                                        self.setState({
                                                qna:response.answers,
                                                on:false
                                        })
                                }
                        );
        }
}

handleQuetion(source){
        var self = this;
        this.setState({
                on:true
        })

                service.getAnswer(
                        this.state.apiKey,
                        this.state.top,
                        this.state.question,
                        function(response){

                                console.log(response)
                                self.setState({
                                        qna:response.answers,
                                        on:false
                                })
                        }
                );
      
}           
render() {

 var index = 0;
 const { transcript, startListening, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }
//     this.setState({
//             question:transcript
//     })
 const steps = [       
                {
                  id: 'intro',
                  message: 'Hi, I am Emma, Here to help you with your queries.',
                  trigger: 'question',
                },
                {
                  id: 'question',
                  user: true,
                  trigger: 'think',
                },
                {
                        id: 'think',
                        message: 'I am thinking...',
                        trigger: 'answer',
                },
                {
                        id: 'answer',
                       // message:"answer",
                        component:<TextChat 
                        apiKey = {this.state.apiKey}
                        top = {this.state.top}
                        key={index++}/>,
                        waitAction: true,
                        asMessage:true,
                        trigger: 'response',
                        delay:3000
                },
                {
                        id: 'response',
                        message: 'You can ask me other question if you have any...',
                        trigger: 'question',
                        delay:1000,
                        // options: [
                        //   { value: 1, label: 'I am satisfied', trigger: 'question' },
                        //   { value: 2, label: 'I am not satisfied', trigger: 'question' },
                        //   { value: 3, label: 'I have other question', trigger: 'question' },
                        // ],
                },
        ]
       
 return (
    <div class="container">
    {/* <Nav/> */}
    
         
    <Loader on={this.state.on}/>
    <div className="section1"> 
        
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
                   
                    <div className="input-group">
                            <input type="text" style={{borderRight:"0px solid red"}}
                            value={this.state.question}
                            onChange={(e)=>this.handleChange(e)}
                            onKeyPress={(e)=>this.handleSerach(e)}
                            class="form-control form-control-lg" 
                            placeholder="Ask a question"  
                            aria-label="Recipient's username" 
                            aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                    
                                    <span onClick={startListening} className="input-group-text">  <i class="fa fa-microphone" aria-hidden="true"></i></span>
                                    {/* <span style={{display:this.state.start?"":"none"}} onClick={startListening} className="input-group-text">  <i class="fa fa-stop-circle" aria-hidden="true"></i></span>
                                    */}
                            </div>
            
                    </div>
                    <div className="buttonContainer">
                            
                                <button type="button" disabled={this.state.question.length>0?false:true}
                                onClick={()=>this.handleQuetion("searchBtn")}
                               
                                class="btnSearch" >Search</button>
                                <button type="button" disabled={this.state.question.length>0?false:true}
                                class="btnPost" >Post</button>
                            

                    </div>
                    <br/>
                    <br/>
                    <br/>
                        <Accordion>
                            {this.state.qna.map((item,index)=>
                            
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h6  style={{wordWrap:"break-word"}} className="u-position-relative">
                                            {item.questions.map((q,i)=>{
                                                  return <p>{q}<br/></p>  
                                            })}
                                        <div className="accordion__arrow" role="presentation" />
                                        
                                        </h6>
                                        
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <div style={{wordWrap:"break-word"}}>{item.answer}</div>    
                                        <div style={{margin:"5px"}}>
                                            {/* <img src={} width="99%" height="99%" /> */}
                                        </div>
                                       
                                    </AccordionItemBody>
                                </AccordionItem>
                           
                                )}
                                

                        </Accordion>
        
            </div>
            <div className="col-2">
            </div>
        </div>
    </div>
    <div className="section3">
       
        <div onClick={()=>this.setState({chatbox:true})} 
        style={{display:this.state.chatbox?"none":""}} className="chatBuuble">
                <img height="70px" width="70px" src={require('../images/chat.png')}/>
        </div>   

        <div style={{display:this.state.chatbox?"":"none"}} className="chatbot">
        <div onClick={()=>this.setState({chatbox:false})}  className="closeButton">
                <i class="fa fa-times" aria-hidden="true"></i>
        </div>       
        <ChatBot   
                recognitionEnable={true}
                steps={steps}
        />
        </div>
    </div>
</div>
 )}
}
const options = {
        autoStart: false
}
export default SpeechRecognition(options)(Home);