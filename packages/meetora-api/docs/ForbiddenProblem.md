
# ForbiddenProblem

The client is authenticated but cannot execute the operation. Typical payload for the 403 Forbidden status code. 

## Properties

Name | Type
------------ | -------------
`type` | string
`status` | number

## Example

```typescript
import type { ForbiddenProblem } from ''

// TODO: Update the object below with actual values
const example = {
  "type": err-forbidden,
  "status": 403,
} satisfies ForbiddenProblem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ForbiddenProblem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


