// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions

/*

exports.handler=async (event, context, callback)=> {
  console.log("queryStringParameters", event.queryStringParameters)
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer EAAAEIEcm9qhG1ds8GyWU6SwEcew6_d96hMEAI9QtLa8LRMHByTtcOIZ5-Dj5-8C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://connect.squareup.com/v2/catalog/list", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


}
*/

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters)
 /* var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer EAAAEIEcm9qhG1ds8GyWU6SwEcew6_d96hMEAI9QtLa8LRMHByTtcOIZ5-Dj5-8C");
*/
/*var requestOptions = {
  method: 'GET',
  headers: {Accept: "application/json",
      Content-Type: "application/json",
      Authorization:"Bearer EAAAEIEcm9qhG1ds8GyWU6SwEcew6_d96hMEAI9QtLa8LRMHByTtcOIZ5-Dj5-8C"},
  redirect: 'follow'
};
*/
var data=fetch("https://connect.squareup.com/v2/catalog/list", {
  method: 'GET',
  headers: {Accept: "application/json",
      Authorization:"Bearer EAAAEIEcm9qhG1ds8GyWU6SwEcew6_d96hMEAI9QtLa8LRMHByTtcOIZ5-Dj5-8C"},
  redirect: 'follow'
}
);

data=data.then(res=>res.text())
  

  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
          
    }),
  })
}