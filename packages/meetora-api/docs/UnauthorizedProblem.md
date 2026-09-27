
# UnauthorizedProblem

The client is not authenticated and needs to authenticate to get the needed permissions. Typical payload for the 401 Unauthorized status code. 

## Properties

Name | Type
------------ | -------------
`type` | string
`status` | number

## Example

```typescript
import type { UnauthorizedProblem } from ''

// TODO: Update the object below with actual values
const example = {
  "type": err-unauthorized,
  "status": 401,
} satisfies UnauthorizedProblem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnauthorizedProblem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


