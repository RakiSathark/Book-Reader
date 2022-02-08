import { readdirSync, readFileSync } from 'fs';

// read in parsable path to current working directory
let currPath = process.cwd().replace(/\\/g,"/");
//console.log('directory: ', `${currPath}/restaurants/aragorn.json`);
let files = readdirSync(currPath + '/restaurants');
let restaurants = {};

for(let i = 0; i < Object.keys(files).length; i++) {
    let data = readFileSync(files[i]).toString();
    let obj = JSON.parse(data);        
    restaurants[obj.name] = obj;
}

// export restaurant data locally
export function returnData() {
    return restaurants;
  }

// console.log(restaurants);


// // send data to server
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == XMLHttpRequest.DONE) {
//         alert(xhr.responseText);
//     }
// }
// xhr.open('GET', 'http://example.com', true);
// xhr.send(null);

// // send data to server
// var http = new XMLHttpRequest();
// var url = 'get_rest_data.php';
// var params = JSON.stringify(restaurants);
// http.open('POST', url, true);

// // Send the proper header information along with the request
// returnRestaurants = () => {
//     http.setRequestHeader('Content-type', 'application/json');
//     // Call a function when the state changes
//     http.onreadystatechange = function() {
//         if(http.readyState == 4 && http.status == 200) {
//             alert(http.responseText);
//         }
//     }
// http.send(params);
// }


// send a post request (from jesperorb)
// var postRequest = new XMLHttpRequest();
// postRequest.open('POST', '127.0.0.1:3000/order.html');
// postRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
// postRequest.send(JSON.stringify(restaurants));

// postRequest.onreadystatechange = function() {
//   if (postRequest.readyState === 4) {
//     var data = JSON.parse(postRequest.responseText);
//     console.log(data);
//   }
// };



// Post a user
var url = "127.0.0.1:3000/data";
var json = JSON.stringify(restaurants);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var rests = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4) {
		console.table(rests);
	} else {
		console.error(rests);
	}
}
xhr.send(json);