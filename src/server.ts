import { app } from './app'
import { env } from './env'

// fastify
// app
//   .listen({
//     host: '0.0.0.0', // deixar acessível para o front-end
//     port: env.PORT,
//   })
//   .then(() => {
//     console.log('🔥 HTTP Server Runing')
//     console.log('Contrata eu 😁')
//   })

// Express
app.listen(env.PORT, '0.0.0.0', () => {
  console.log('🔥 HTTP Server Runing')
  console.log('Contrata eu 😁')
})
