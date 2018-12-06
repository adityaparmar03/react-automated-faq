import axios from 'axios'
var baseUrl = "http://localhost:9000";

var getAnswer = function(apiKey,top,question,cb){

    axios.post(baseUrl+'/qna/ask', {
        "que":question,
	    "apiKey":apiKey,
	    "top":top
      })
      .then(function (response) {
        cb(response.data)  
      })
      .catch(function (error) {
        console.log(error);
      });

}

export default {
    getAnswer:getAnswer
};



