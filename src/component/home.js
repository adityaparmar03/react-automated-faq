import React from 'react';
import '.'
const Home = () => (
    <div class="container">
    <div class="row">
            <div class="col">
            </div>
            <div class="col-8">
                    <h2>Customer Support</h2>
                    <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Ask a question"  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                    <span class="input-group-text">  <i class="fa fa-microphone fa-microphone-local" aria-hidden="true"></i></span>
                            </div>
            
                    </div>
                            <button type="button" class="btn btn-primary" >Search</button>
                            <button type="button" class="btn btn-primary" >Post</button>
            </div>
            <div class="col">
            </div>
    </div>
</div>
   

);
export default Home;