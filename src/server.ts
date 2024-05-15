import { app } from './app'
import { env } from './env'

// app.listen({
//     host: '0.0.0.0', // deixar acessível para o front-end
//     port: 3333
// }).then(() => {
//     console.log('🔥 HTTP Server Runing')
//     console.log('Contrata eu 😁')
// })

app.listen(env.PORT, '0.0.0.0', () => {
  console.log('🔥 HTTP Server Runing')
  console.log('Contrata eu 😁')
})
