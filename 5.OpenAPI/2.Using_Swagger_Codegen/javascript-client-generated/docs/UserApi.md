# SwaggerPetstoreOpenApi30.UserApi

All URIs are relative to *https://petstore3.swagger.io/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /user | Create user
[**createUsersWithListInput**](UserApi.md#createUsersWithListInput) | **POST** /user/createWithList | Creates list of users with given input array
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/{username} | Delete user
[**getUserByName**](UserApi.md#getUserByName) | **GET** /user/{username} | Get user by user name
[**loginUser**](UserApi.md#loginUser) | **GET** /user/login | Logs user into the system
[**logoutUser**](UserApi.md#logoutUser) | **GET** /user/logout | Logs out current logged in user session
[**updateUser**](UserApi.md#updateUser) | **PUT** /user/{username} | Update user

<a name="createUser"></a>
# **createUser**
> User createUser(opts)

Create user

This can only be done by the logged in user.

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.UserApi();
let opts = { 
  'body': new SwaggerPetstoreOpenApi30.User(), // User | Created user object
  'id': 789, // Number | 
  'username': "username_example", // String | 
  'firstName': "firstName_example", // String | 
  'lastName': "lastName_example", // String | 
  'email': "email_example", // String | 
  'password': "password_example", // String | 
  'phone': "phone_example", // String | 
  'userStatus': 56 // Number | 
};
apiInstance.createUser(opts, (error, data, response) => {
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
 **body** | [**User**](User.md)| Created user object | [optional] 
 **id** | **Number**|  | [optional] 
 **username** | **String**|  | [optional] 
 **firstName** | **String**|  | [optional] 
 **lastName** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **userStatus** | **Number**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="createUsersWithListInput"></a>
# **createUsersWithListInput**
> User createUsersWithListInput(opts)

Creates list of users with given input array

Creates list of users with given input array

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.UserApi();
let opts = { 
  'body': [new SwaggerPetstoreOpenApi30.User()] // [User] | 
};
apiInstance.createUsersWithListInput(opts, (error, data, response) => {
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
 **body** | [**[User]**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(username)

Delete user

This can only be done by the logged in user.

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.UserApi();
let username = "username_example"; // String | The name that needs to be deleted

apiInstance.deleteUser(username, (error, data, response) => {
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
 **username** | **String**| The name that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserByName"></a>
# **getUserByName**
> User getUserByName(username)

Get user by user name

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.UserApi();
let username = "username_example"; // String | The name that needs to be fetched. Use user1 for testing. 

apiInstance.getUserByName(username, (error, data, response) => {
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
 **username** | **String**| The name that needs to be fetched. Use user1 for testing.  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="loginUser"></a>
# **loginUser**
> &#x27;String&#x27; loginUser(opts)

Logs user into the system

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.UserApi();
let opts = { 
  'username': "username_example", // String | The user name for login
  'password': "password_example" // String | The password for login in clear text
};
apiInstance.loginUser(opts, (error, data, response) => {
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
 **username** | **String**| The user name for login | [optional] 
 **password** | **String**| The password for login in clear text | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="logoutUser"></a>
# **logoutUser**
> logoutUser()

Logs out current logged in user session

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.UserApi();
apiInstance.logoutUser((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateUser"></a>
# **updateUser**
> updateUser(username, opts)

Update user

This can only be done by the logged in user.

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';

let apiInstance = new SwaggerPetstoreOpenApi30.UserApi();
let username = "username_example"; // String | name that need to be deleted
let opts = { 
  'body': new SwaggerPetstoreOpenApi30.User(), // User | Update an existent user in the store
  'id': 789, // Number | 
  'username': "username_example", // String | 
  'firstName': "firstName_example", // String | 
  'lastName': "lastName_example", // String | 
  'email': "email_example", // String | 
  'password': "password_example", // String | 
  'phone': "phone_example", // String | 
  'userStatus': 56 // Number | 
};
apiInstance.updateUser(username, opts, (error, data, response) => {
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
 **username** | **String**| name that need to be deleted | 
 **body** | [**User**](User.md)| Update an existent user in the store | [optional] 
 **id** | **Number**|  | [optional] 
 **username** | **String**|  | [optional] 
 **firstName** | **String**|  | [optional] 
 **lastName** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **userStatus** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

