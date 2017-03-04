import fetch from 'node-fetch';

export default class RestConnector {
  /**
   * Returns a result from a promise (fetch)
   * according to the response code from the api
   * @param {Object} response Response object from fetch
   */
  static status(response) {
    let result = null;
    const { status, statusText, url } = response;
    if (status >= 200 && status < 300) {
      result = Promise.resolve(response);
      console.log(['fetch'], `${url} ${status} ${statusText}`);
    } else {
      result = Promise.reject(new Error(status));
      console.error(['fetch', 'error'], `${url} (${status} ${statusText})`);
    }
    return result;
  }

  constructor({ id, token, api }) {
    this.api = api;
    this.id = id;
    this.token = token;
    this.fetch = fetch;
    this.options = {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    if (typeof token !== 'undefined' && token !== 'null') {
      this.options.headers.authorization = `Bearer ${token}`;
    }
    console.log(['fetch', 'service'], `${id} ${token}`);
  }
  /**
   * Returns full url of endpoint
   * @param {string} path
   */
  url(path) {
    return this.api + path;
  }
  /**
   * Returns fetch Promise (GET)
   * @param {string} path
   */
  get(path) {
    return fetch(
      this.url(path),
      {
        ...this.options,
        method: 'GET',
      },
    ).then(this.constructor.status);
  }
  /**
   * Returns fetch Promise (POST)
   * @param {string} path Endpoint of the api
   * @param {object} body Body of the request
   */
  post(path, body) {
    return fetch(
      this.url(path),
      {
        headers: {
          ...this.options.headers,
          Accept: 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
      },
    ).then(this.constructor.status);
  }
  /**
   * Returns fetch Promise (PUT)
   * @param {string} path Endpoint of the api
   * @param {object} body Body of the request
   */
  put(path, body) {
    return fetch(
      this.url(path),
      {
        headers: {
          ...this.options.headers,
          Accept: 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(body),
      },
    ).then(this.constructor.status);
  }
  /**
   * Returns a fetch Promise (DELETE)
   * @param {string} path Endpoint of the api
   */
  delete(path) {
    return fetch(
      this.url(path),
      {
        ...this.options,
        method: 'DELETE',
      },
    ).then(this.constructor.status);
  }
  /**
   * TODO: PATCH
   */
}
