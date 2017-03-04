import RestConnector from './rest';

export default args => ({
  /**
   * Helper function for receiving json of a response
   * @param  {Object} data Response
   * @return {Object}      JSON data
   */
  json: data => data.json(),
  /**
   * Example (not in use while we are generating it right here)
   * @type {RestConnector}
   */
  example: new RestConnector(
    { args },
    'https://my-example.url-for-the-api.com/',
  ),
});
