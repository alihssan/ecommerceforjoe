/*
const SquareConnection=require('square-connection');
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")
var SquareConnect = require('square-connect');


const fetch = require('node-fetch');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
   var defaultClient = SquareConnect.ApiClient.instance;
	var oauth2 = defaultClient.authentications['oauth2'];
	oauth2.accessToken = 'EAAAEIEcm9qhG1ds8GyWU6SwEcew6_d96hMEAI9QtLa8LRMHByTtcOIZ5-Dj5-8C'
var apiInstance = new SquareConnect.CatalogApi();
var opts = { 
  'cursor': SquareConnect.CatalogApi.constructFromObject({}), // String | The pagination cursor returned in the previous response. Leave unset for an initial request. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
  'types': SquareConnect.CatalogApi.constructFromObject({}), // String | An optional case-insensitive, comma-separated list of object types to retrieve, for example `ITEM,ITEM_VARIATION,CATEGORY,IMAGE`.  The legal values are taken from the CatalogObjectType enum: `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`, `MODIFIER`, `MODIFIER_LIST`, or `IMAGE`.
  'catalogVersion': SquareConnect.CatalogApi.constructFromObject({}) // Number | The specific version of the catalog objects to be included in the response.  This allows you to retrieve historical versions of objects. The specified version value is matched against the `CatalogObject`s' `version` attribute.
};
apiInstance.listCatalog(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});




  return
}

/*const square = new SquareConnection('EAAAEGuOU0fZy_1YbWVl_HnHuTlbv7yJMp4nlJ4sRa4S0cFhgW-tZInP6oTWV1SB');
const request = square.get('/catalog/list');

request.then((result) => {
  console.log(result); // logs out an Axios result object if the API call succeded
});

request.catch((error) => {
  console.log(error); // logs out an Axios error object if the API call didn't succed
});
*/