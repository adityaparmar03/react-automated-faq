import React, {Component} from 'react';
var Spinner = require('react-spinkit');

class Loader extends Component {
    constructor(props){
        super(props);
        this.state = {
           // IsOn : true
        }
     }
    componentDidMount() {
       
    }
    componentWillReceiveProps(nextProps) {
          if (nextProps.products) {
            console.log()
            this.setState({
             
             // IsOn:nextProps.IsOn   
             
            })
          
          }
      }
    componentDidUpdate (){
       
    } 
    render() {
        return (
             
            <div style={{display:this.props.on?"flex":"none"}} className="miniLoading">
                
               
                    <Spinner name="ball-spin-fade-loader" color="orange"/>
                
              
                   
                     
            </div>
        );
    }
}

export default ((Loader));
