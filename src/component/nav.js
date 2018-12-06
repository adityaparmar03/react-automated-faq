import React, {Component} from 'react';

class Nav extends Component {

render() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img class="navbar-brand" style={{height:"30px",width:"25px"}} src={require('../images/companylogo.png')}/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
           
            <li class="nav-item active">
                <a class="nav-link" href="#">Mac <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">iPad <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">iPhone <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Watch <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Support <span class="sr-only">(current)</span></a>
            </li>
            
            </ul>
        
        </div>
        </nav>
        </div>
)}
}
export default Nav;