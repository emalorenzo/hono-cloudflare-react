import { Hono } from 'hono'
import { renderer } from './renderer'
import { reactRenderer } from '@hono/react-renderer'
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server'
import { routes } from './routes'
import ReactDomServer from "react-dom/server";
import React from 'react'

const app = new Hono()

app.get(
  '*',
  reactRenderer(({ children }) => {
    return (
      <html>
        <head>
          <script type="module" src="/src/client.tsx"></script>
        </head>
        <body>
          <h1>React + Hono</h1>
          <div id='app'>{children}</div>
        </body>
      </html>
    )
  })
)

app.get('*', async (c) => {
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(c.req.raw);
  
  if (context instanceof Response) {
    throw context;
  }
  
  const router = createStaticRouter(dataRoutes, context);
  
  return c.render(
      <StaticRouterProvider router={router} context={context}/>
  )
})

export default app
