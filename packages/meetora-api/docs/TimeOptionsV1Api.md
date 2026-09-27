# TimeOptionsV1Api

All URIs are relative to *http://localhost:8082*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTimeOptionV1**](TimeOptionsV1Api.md#createtimeoptionv1) | **POST** /v1/time-options | Create a new time slot option group |
| [**getTimeOptionsV1**](TimeOptionsV1Api.md#gettimeoptionsv1) | **GET** /v1/time-options | Retrieve available time slot options |



## createTimeOptionV1

> TimeSlotResponseDto createTimeOptionV1(createTimeSlotOptionRequestDto)

Create a new time slot option group

Creates one or more labels for a specific hour.

### Example

```ts
import {
  Configuration,
  TimeOptionsV1Api,
} from '';
import type { CreateTimeOptionV1Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: meetoraOAuth accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TimeOptionsV1Api(config);

  const body = {
    // CreateTimeSlotOptionRequestDto
    createTimeSlotOptionRequestDto: ...,
  } satisfies CreateTimeOptionV1Request;

  try {
    const data = await api.createTimeOptionV1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createTimeSlotOptionRequestDto** | [CreateTimeSlotOptionRequestDto](CreateTimeSlotOptionRequestDto.md) |  | |

### Return type

[**TimeSlotResponseDto**](TimeSlotResponseDto.md)

### Authorization

[meetoraOAuth accessCode](../README.md#meetoraOAuth-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Time slot option successfully created. |  -  |
| **400** | Invalid input provided |  -  |
| **401** | Unauthorized access |  -  |
| **403** | Forbidden access |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTimeOptionsV1

> Array&lt;TimeSlotResponseDto&gt; getTimeOptionsV1()

Retrieve available time slot options

Retrieves the active time slot options grouped by hour and labels.

### Example

```ts
import {
  Configuration,
  TimeOptionsV1Api,
} from '';
import type { GetTimeOptionsV1Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: meetoraOAuth accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TimeOptionsV1Api(config);

  try {
    const data = await api.getTimeOptionsV1();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;TimeSlotResponseDto&gt;**](TimeSlotResponseDto.md)

### Authorization

[meetoraOAuth accessCode](../README.md#meetoraOAuth-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of active time slot options. |  -  |
| **400** | Invalid input provided |  -  |
| **401** | Unauthorized access |  -  |
| **403** | Forbidden access |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

