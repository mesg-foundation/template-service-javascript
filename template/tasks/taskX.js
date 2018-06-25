module.exports = ({ foo, bar }, { success, error }) => {
  if (foo === "hello" && bar === "world") {
    success({ message: "Hello world is valid" })
  } else {
    error({
      code: -1,
      error: "invalid inputs"
    })
  }
}
