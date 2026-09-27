
# BadRequestProblem

The request is invalid and cannot be processed. Typical payload 400 Bad Request Code

## Properties

Name | Type
------------ | -------------
`type` | string
`oasDiscriminator` | string

## Example

```typescript
import type { BadRequestProblem } from ''

// TODO: Update the object below with actual values
const example = {
  "type": err-bad-request,
  "oasDiscriminator": null,
} satisfies BadRequestProblem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BadRequestProblem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


