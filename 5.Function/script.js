//XMLHTTPRequest

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log("Successfull Request")
            // console.log(this.responseText) // String -responseText, XML - responseXML
        var users = JSON.parse(this.responseText); //JSON
        // console.log(typeof(users))
        // console.log(JSON.parse(users));
        console.log(users)


            // console.log(JSON.stringify(users))
    } else { console.error("Cannot Connect to server") }

}


http.open("GET", "https://jsonplaceholder.typicode.com/users")
http.send();

// readyState
//0- Request Not Initialized
//1-Connection Success
//2-Received Request
//3- Processing Request
//4 - Response Came