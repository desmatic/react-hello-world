import http from 'http'

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>React Hello World!</title>
        <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      </head>
      <body>
        <div id="root"></div>
        <script type="text/javascript">
          class App extends React.Component {
            render() {
              return React.createElement('h1', null, 'Hello ' + this.props.message)
            }
          }
          ReactDOM.render(
            React.createElement(App, { message: 'World!' }),
            document.getElementById('root')
          )
        </script>
      </body>
    </html>`
  )
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
