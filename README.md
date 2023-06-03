# APIExpress
API Express was created to solve a common problem with Agency work. Starting native development before API’s are ready.

Using Mock data in native applications and acquiring test data is not always as straight-forward as you'd think. A developer may sit idle for days sometimes waiting for this. Using APIExpress and with a simple request,APIExpress can generate the data matching your prompts and schema.

## Current Features
- Specify JSON schema
- Generate responses to any API request ~5 objects at a time. This could be easily enhanced with a more capable GPT mode (token restrictions currently).
- Requests are hashed and responses cached. subsequent calls are much faster.
- Detailed Logging Support.
- Ability to call the API without using cache.

## Future Enhancements
- Generate API Documentation.
- Database integration to near-instantly populating test data once API’s are built, but before there is data.
- Generate model objects for the API’s in Swift, Kotlin, C# or other native languages
- Improved JSON verification and linting.
- More robust HTTP error code handling.

## Dev setup
### Dependencies
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [docker](https://docs.docker.com/engine/install/)

### Branching
- branch `main` contains working build

### Local installation
1. Clone repository & `cd` into the `ultimock` directory
2. `yarn` to install package dependencies
3. `yarn docker:build` to build your docker image
4. `yarn docker:run` to bind your docker image to `https://localhost:8080` and serve
5. Using the web interface concatenate your query
6. Logs and caches are archived to your filesystem under `app/storage/logs` and `app/storage/cache` respectively

### Postman collection
A [Postman](https://www.postman.com/) collection of test queries can be found in the repository as well titled `postman_collection.json`
