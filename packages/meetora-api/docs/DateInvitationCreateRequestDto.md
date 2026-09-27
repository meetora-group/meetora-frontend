
# DateInvitationCreateRequestDto

The details of the invitation to create

## Properties

Name | Type
------------ | -------------
`scheduledTime` | Date
`label` | string
`recipientEmail` | string

## Example

```typescript
import type { DateInvitationCreateRequestDto } from ''

// TODO: Update the object below with actual values
const example = {
  "scheduledTime": 2026-08-15T19:00Z,
  "label": 19h - late dinner,
  "recipientEmail": target@example.com,
} satisfies DateInvitationCreateRequestDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DateInvitationCreateRequestDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


