# SwaggerPetstoreOpenApi30.PetApi

All URIs are relative to *https://petstore3.swagger.io/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPet**](PetApi.md#addPet) | **POST** /pet | Add a new pet to the store
[**deletePet**](PetApi.md#deletePet) | **DELETE** /pet/{petId} | Deletes a pet
[**findPetsByStatus**](PetApi.md#findPetsByStatus) | **GET** /pet/findByStatus | Finds Pets by status
[**findPetsByTags**](PetApi.md#findPetsByTags) | **GET** /pet/findByTags | Finds Pets by tags
[**getPetById**](PetApi.md#getPetById) | **GET** /pet/{petId} | Find pet by ID
[**updatePet**](PetApi.md#updatePet) | **PUT** /pet | Update an existing pet
[**updatePetWithForm**](PetApi.md#updatePetWithForm) | **POST** /pet/{petId} | Updates a pet in the store with form data
[**uploadFile**](PetApi.md#uploadFile) | **POST** /pet/{petId}/uploadImage | uploads an image

<a name="addPet"></a>
# **addPet**
> Pet addPet(body, id, name, category, photoUrls, tags, status)

Add a new pet to the store

Add a new pet to the store

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let body = new SwaggerPetstoreOpenApi30.Pet(); // Pet | Create a new pet in the store
let id = 789; // Number | 
let name = "name_example"; // String | 
let category = new SwaggerPetstoreOpenApi30.Category(); // Category | 
let photoUrls = ["photoUrls_example"]; // [String] | 
let tags = [new SwaggerPetstoreOpenApi30.Tag()]; // [Tag] | 
let status = "status_example"; // String | 

apiInstance.addPet(body, id, name, category, photoUrls, tags, status, (error, data, response) => {
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
 **body** | [**Pet**](Pet.md)| Create a new pet in the store | 
 **id** | **Number**|  | 
 **name** | **String**|  | 
 **category** | [**Category**](.md)|  | 
 **photoUrls** | [**[String]**](String.md)|  | 
 **tags** | [**[Tag]**](Tag.md)|  | 
 **status** | **String**|  | 

### Return type

[**Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="deletePet"></a>
# **deletePet**
> deletePet(petId, opts)

Deletes a pet

delete a pet

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let petId = 789; // Number | Pet id to delete
let opts = { 
  'apiKey': "apiKey_example" // String | 
};
apiInstance.deletePet(petId, opts, (error, data, response) => {
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
 **petId** | **Number**| Pet id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="findPetsByStatus"></a>
# **findPetsByStatus**
> [Pet] findPetsByStatus(opts)

Finds Pets by status

Multiple status values can be provided with comma separated strings

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let opts = { 
  'status': "available" // String | Status values that need to be considered for filter
};
apiInstance.findPetsByStatus(opts, (error, data, response) => {
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
 **status** | **String**| Status values that need to be considered for filter | [optional] [default to available]

### Return type

[**[Pet]**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="findPetsByTags"></a>
# **findPetsByTags**
> [Pet] findPetsByTags(opts)

Finds Pets by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let opts = { 
  'tags': ["tags_example"] // [String] | Tags to filter by
};
apiInstance.findPetsByTags(opts, (error, data, response) => {
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
 **tags** | [**[String]**](String.md)| Tags to filter by | [optional] 

### Return type

[**[Pet]**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getPetById"></a>
# **getPetById**
> Pet getPetById(petId)

Find pet by ID

Returns a single pet

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let petId = 789; // Number | ID of pet to return

apiInstance.getPetById(petId, (error, data, response) => {
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
 **petId** | **Number**| ID of pet to return | 

### Return type

[**Pet**](Pet.md)

### Authorization

[api_key](../README.md#api_key), [petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="updatePet"></a>
# **updatePet**
> Pet updatePet(body, id, name, category, photoUrls, tags, status)

Update an existing pet

Update an existing pet by Id

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let body = new SwaggerPetstoreOpenApi30.Pet(); // Pet | Update an existent pet in the store
let id = 789; // Number | 
let name = "name_example"; // String | 
let category = new SwaggerPetstoreOpenApi30.Category(); // Category | 
let photoUrls = ["photoUrls_example"]; // [String] | 
let tags = [new SwaggerPetstoreOpenApi30.Tag()]; // [Tag] | 
let status = "status_example"; // String | 

apiInstance.updatePet(body, id, name, category, photoUrls, tags, status, (error, data, response) => {
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
 **body** | [**Pet**](Pet.md)| Update an existent pet in the store | 
 **id** | **Number**|  | 
 **name** | **String**|  | 
 **category** | [**Category**](.md)|  | 
 **photoUrls** | [**[String]**](String.md)|  | 
 **tags** | [**[Tag]**](Tag.md)|  | 
 **status** | **String**|  | 

### Return type

[**Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updatePetWithForm"></a>
# **updatePetWithForm**
> updatePetWithForm(petId, opts)

Updates a pet in the store with form data

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let petId = 789; // Number | ID of pet that needs to be updated
let opts = { 
  'name': "name_example", // String | Name of pet that needs to be updated
  'status': "status_example" // String | Status of pet that needs to be updated
};
apiInstance.updatePetWithForm(petId, opts, (error, data, response) => {
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
 **petId** | **Number**| ID of pet that needs to be updated | 
 **name** | **String**| Name of pet that needs to be updated | [optional] 
 **status** | **String**| Status of pet that needs to be updated | [optional] 

### Return type

null (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="uploadFile"></a>
# **uploadFile**
> ApiResponse uploadFile(petId, opts)

uploads an image

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let petId = 789; // Number | ID of pet to update
let opts = { 
  'body': null, // Object | 
  'additionalMetadata': "additionalMetadata_example" // String | Additional Metadata
};
apiInstance.uploadFile(petId, opts, (error, data, response) => {
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
 **petId** | **Number**| ID of pet to update | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **additionalMetadata** | **String**| Additional Metadata | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

