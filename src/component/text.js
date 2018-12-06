import React, {Component} from 'react';
import service from '../service/service'

class TextChat extends Component {
   
    constructor(props){
        super(props);
        this.state = {
          answer : "Still thinking..."
        }
     }
   
     componentDidMount() {
        
        this.handleQuetion(this.props.steps.question.message);
       
    }

    handleQuetion(question){
        var self = this;
    
        service.getAnswer(
                        this.props.apiKey,
                        this.props.top,
                        question,
                        function(response){

                                console.log(response)
                                let res = response.answers[0].answer
                                console.log(res)
                                self.setState({
                                    answer:res
                                })
                                self.props.triggerNextStep({ value:null, trigger:"response" })
       
                        }
                );
        

} 
   
  
    render() {
      
        return (
           <div style={{wordWrap:"break-word"}}>
               <p>{this.state.answer}</p>
           </div>
        );
    }
}




export default ((TextChat));
