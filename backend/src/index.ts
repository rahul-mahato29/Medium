import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  return c.text('singup route')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('signin route')
})

app.post('/api/v1/blog', (c) => {
  return c.text('post blog route')
})

app.put('/api/v1/blog', (c) => {
  return c.text('update blog route')
})

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id')
  console.log(id)
  return c.text('read blog route')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('read all blog route')
})

export default app
