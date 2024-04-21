# SwaggerPetstoreOpenApi30.StoreApi

All URIs are relative to *https://petstore3.swagger.io/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrder**](StoreApi.md#deleteOrder) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
[**getInventory**](StoreApi.md#getInventory) | **GET** /store/inventory | Returns pet inventories by status
[**getOrderById**](StoreApi.md#getOrderById) | **GET** /store/order/{orderId} | Find purchase order by ID
[**placeOrder**](StoreApi.md#placeOrder) | **POST** /store/order | Place an order for a pet

<a name="deleteOrder"></a>
# **deleteOrder**
> deleteOrder(orderId)

Delete purchase order by ID

For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.StoreApi();
let orderId = 789; // Number | ID of the order that needs to be deleted

apiInstance.deleteOrder(orderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| ID of the order that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getInventory"></a>
# **getInventory**
> {&#x27;String&#x27;: &#x27;Number&#x27;} getInventory()

Returns pet inventories by status

Returns a map of status codes to quantities

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwaggerPetstoreOpenApi30.StoreApi();
apiInstance.getInventory((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{&#x27;String&#x27;: &#x27;Number&#x27;}**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderById"></a>
# **getOrderById**
> Order getOrderById(orderId)

Find purchase order by ID

For valid response try integer IDs with value &lt;&#x3D; 5 or &gt; 10. Other values will generate exceptions.

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.StoreApi();
let orderId = 789; // Number | ID of order that needs to be fetched

apiInstance.getOrderById(orderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| ID of order that needs to be fetched | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="placeOrder"></a>
# **placeOrder**
> Order placeOrder(opts)

Place an order for a pet

Place a new order in the store

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.StoreApi();
let opts = { 
  'body': new SwaggerPetstoreOpenApi30.Order(), // Order | 
  'id': 789, // Number | 
  'petId': 789, // Number | 
  'quantity': 56, // Number | 
  'shipDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'status': "status_example", // String | 
  'complete': true // Boolean | 
};
apiInstance.placeOrder(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Order**](Order.md)|  | [optional] 
 **id** | **Number**|  | [optional] 
 **petId** | **Number**|  | [optional] 
 **quantity** | **Number**|  | [optional] 
 **shipDate** | **Date**|  | [optional] 
 **status** | **String**|  | [optional] 
 **complete** | **Boolean**|  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

