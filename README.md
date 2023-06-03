# 👾 APIExpress

![Screenshot of apiexpress UI](screenshot.png?raw=true)

API Express was created to solve a common problem with Agency work. Starting native development before API’s are ready.

Using Mock data in native applications and acquiring test data is not always as straight-forward as you'd think. A developer may sit idle for days sometimes waiting for this. Using APIExpress and with a simple request,APIExpress can generate the data matching your prompts and schema.

## AI Usage in this project
- ChatGPT3 API.
- Gamma.app for the deck.
- Notion AskAI and ChatGPT for generating documents and brainstorming ideas.
- AI for generating logo.
- ChatGPT for generating some javascript functions.

## Current Features
- Generate responses to any API request ~10 objects at a time is performant. This could be easily enhanced with a more capable GPT mode.
- Requests are hashed and responses cached. subsequent calls are much faster.
- Ability to bypass cache.
- Basic UI for testing requests.
- Simple nested structures.
- Robust and verbose logging.

## Future Enhancements
- Generate API Documentation.
- Database integration to near-instantly populating test data once API’s are built, but before there is data.
- Generate model objects and request code for the API’s in Swift, Kotlin, C# or other native languages.
- Improved JSON verification and linting.
- Improved HTTP error code handling.
- Data consistency between requests.
- Complex nesting.
- Pagination of longer data requirements.
- More complex querying for referenced JSON structures.

## Dev setup
### Dependencies
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [Docker](https://docs.docker.com/engine/install/)
- [OpenAI API key](https://platform.openai.com/account/api-keys)

### Branching
- branch `main` contains working build

### Local installation
1. Clone repository & `cd` into the `ultimock` directory
2. Duplicate `.env.example` as `.env` and add your `OpenAI_API_KEY`
3. `yarn` to install package dependencies
4. `yarn build` to build the app
5. `yarn docker:build` to build your docker image
6. `yarn docker:run` to bind your docker image to `https://localhost:8080` and serve
7. Using the web interface concatenate your query
8. Logs and caches are archived to your filesystem under `app/storage/logs` and `app/storage/cache` respectively

### Postman collection
A [Postman](https://www.postman.com/) collection of test queries can be found in the repository as well titled `postman_collection.json`
