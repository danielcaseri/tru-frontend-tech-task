const URL = "http://127.0.0.1:3001/measures?shoppingChannel=";
export default class service {
    dataRequest(toggleRequest, callback) {
        let url = URL 
        
        if(toggleRequest) {
            url += "instore"
        } else {
            url += "online"
        }
        
        fetch(url).then((response) => {
            response.json().then((data) => {
                console.log(data)
                // remove calculation as it's not a real measure
                data.splice(0, 1);
                callback(data)
            })
        });
    }
} 