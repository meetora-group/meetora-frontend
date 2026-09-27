
# NotFoundProblem

The requested source cannot be found. Typical payload 404 Not Found Code

## Properties

Name | Type
------------ | -------------
`type` | string
`status` | number

## Example

```typescript
import type { NotFoundProblem } from ''

// TODO: Update the object below with actual values
const example = {
  "type": err-not-found,
  "status": 404,
} satisfies NotFoundProblem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NotFoundProblem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


