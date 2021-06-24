# Clover Api Client

**Clover Api Client** is a Typescript library which implements clover api. The library does not modify request and response payload.

* [Installation](#installation)
* [Usage](#usage)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [Unit Tests](#unit-tests)
* [License](#license)

## Installation

```
npm i @goparrot/clover-api-client
```

## Usage

### Simple example

```typescript
import { CloverCharge, ICloverChargeReq } from '@goparrot/clover-api-client';
const client = new CloverCharge({
    baseUrl: 'baseurl',
    accessToken: 'accessToken'
});
const payload: ICloverChargeReq = { /* Create charge payload */ };
/* Create a charge */
client.create(payload)
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

## Available Options

### `ICloverAxiosConfig` Options
    baseUrl: string;
    accessToken?: string;
    axiosConfig?: AxiosRequestConfig;
    axiosRetryConfig?: IAxiosRetryConfig;
    maxRetries?: number;
    tokenRateLimit?: number;
    crossTokenRateLimit?: number;
    tokenConcurrentRateLimit?: number;
    crossTokenConcurrentRateLimit?: number;

| Name           | Type       | Default            |Required          | Description                                                                                                                                                                                                                                                           |
| -------------- | ---------- | ------------------ |------------------| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                           |
| baseUrl     | `String`   |                |true|  Clover provides its REST API at a separate base URL in the production environment,Ecommerce service API: `https://scl.clover.com`, Platform API (EU): `https://api.eu.clover.com`, Platform API (US & Canada): `https://api.clover.com`. Also for control the delay between retried request is used the built-in `exponentialDelay` function is used ([Exponential Backoff](https://developers.google.com/analytics/devguides/reporting/core/v3/errors#backoff)). |
| accessToken        | `String`  |  | true|**With the exception of tokenizing**, all Ecommerce API endpoints require an OAuth-generated auth_token with specific permissions.                                                                                                                                                                          |
| tokenRateLimit | `String` | 16 | false|Indicates that your app is reaching our request rate limits, signaling too many requests per second and per token.
| crossTokenRateLimit | `String` | 50 |false| Indicates that your app is reaching our request rate limits, signaling too many requests per second and per app.
| tokenConcurrentRateLimit | `String` | 5 | false|Indicates that your app is making too many concurrent requests. Per token concurrently. A request is considered concurrent if there’s another in-progress request that has not returned a response.
| crossTokenConcurrentRateLimit|  `String` | 10 |false| Indicates that your app is making too many concurrent requests. Per app concurrently. A request is considered concurrent if there’s another in-progress request that has not returned a response.

## Versioning

Clover Api Client follows [Semantic Versioning](http://semver.org/).

## Contributing

See [`CONTRIBUTING`](https://github.com/goparrot/clover-api-client/blob/master/CONTRIBUTING.md#contributing) file.

## Unit Tests

In order to run the test suite, install the development dependencies:

```
npm i
```

Then, run the following command:

```
npm run coverage
```

## License

`@goparrot/clover-api-client` is licensed under the [MIT license](LICENSE).
