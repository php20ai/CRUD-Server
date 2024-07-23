/// starting Server 
require('dotenv').config()
const app = require("./app")
const port = process.env.PORT || 5000  // env is a file containing variables (and code)
// that we do not want it to be visible, i.e. we want it to be kept secret.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
