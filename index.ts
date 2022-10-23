import { app } from './src/app'
import { port } from './src/config'

app.listen(port, () => {
  console.log(`Listening in port: ${port}`)
})
