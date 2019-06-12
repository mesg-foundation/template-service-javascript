module.exports = ({ foo, bar }) => {
  if (foo !== 'hello' || bar !== 'world') {
    throw new Error('invalid inputs')
  }
  return {
    message: 'Hello world is valid'
  }
}
