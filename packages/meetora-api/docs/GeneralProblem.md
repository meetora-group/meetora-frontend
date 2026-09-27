
# GeneralProblem

A general problem that can be used as base for more specific problems.

## Properties

Name | Type
------------ | -------------
`type` | string
`errorId` | string
`title` | string
`status` | number
`detail` | string
`severity` | string
`traceId` | string
`timestamp` | Date
`oasDiscriminator` | string

## Example

```typescript
import type { GeneralProblem } from ''

// TODO: Update the object below with actual values
const example = {
  "type": urn:problem-type:not-entitled-for-payment-method,
  "errorId": err-ORT-UN-01,
  "title": You're not entitle to use this method of payment,
  "status": 400,
  "detail": Customer 123 has only GOLD status but needs PLATINUM to be entitled to order,
  "severity": null,
  "traceId": 123e4567-e89b-12d3-a456-426614234000,
  "timestamp": 2026-04-02T12:12:12.999Z,
  "oasDiscriminator": null,
} satisfies GeneralProblem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneralProblem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


