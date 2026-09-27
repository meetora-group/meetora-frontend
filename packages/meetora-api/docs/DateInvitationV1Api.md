# DateInvitationV1Api

All URIs are relative to *http://localhost:8082*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**scheduleDateV1**](DateInvitationV1Api.md#scheduledatev1) | **POST** /v1/invitations | Submit a scheduled date invitation |



## scheduleDateV1

> scheduleDateV1(dateInvitationCreateRequestDto)

Submit a scheduled date invitation

Creates a new invitation with the provided details.

### Example

```ts
import {
  Configuration,
  DateInvitationV1Api,
} from '';
import type { ScheduleDateV1Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: meetoraOAuth accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DateInvitationV1Api(config);

  const body = {
    // DateInvitationCreateRequestDto
    dateInvitationCreateRequestDto: ...,
  } satisfies ScheduleDateV1Request;

  try {
    const data = await api.scheduleDateV1(body);
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
| **dateInvitationCreateRequestDto** | [DateInvitationCreateRequestDto](DateInvitationCreateRequestDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[meetoraOAuth accessCode](../README.md#meetoraOAuth-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Invitation successfully created |  -  |
| **400** | Invalid input provided |  -  |
| **401** | Unauthorized access |  -  |
| **403** | Forbidden access |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

