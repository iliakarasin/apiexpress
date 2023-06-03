# APIExpress

API Express was created to solve a common problem with Agency work. Starting native development before API’s are ready.

Using Mock data in native applications and acquiring test data is not always as straight-forward as you'd think. Developer will sit nearly idle for days sometimes waiting for this. With APIExpress with a simple request, API Express can generate the data matching your prompt and schema.

## Current Features

- Specify JSON schema.
- Generate responses to any API request ~5 objects at a time. This could be easily enhanced with a more capable GPT mode.
- Requests are hashed and responses cached. subsequent calls are much faster.
- Detailed Logging Support.
- Ability to call the API without using cache.

## Future Enhancements

- Generate API Documentation.
- Database integration to near-instantly populating test data once API’s are built, but before there is data.
- Generate model objects for the API’s in Swift, Kotlin, C# or other native languages
- Improved JSON verification and linting.
- More robust HTTP error code handling.