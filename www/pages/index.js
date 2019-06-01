import Logo from '../components/Logo'
import 'isomorphic-unfetch'

const apis = [
  { name: 'PHP', path: 'php', src: '../static/php.svg' },
  { name: 'Python', path: 'python', src: '../static/python.svg' },
  { name: 'Bash', path: 'bash', src: '../static/bash.svg' },
  { name: 'Node.js', path: 'node', src: '../static/node.svg' },
  { name: 'Flask', path: 'flask', src: '../static/flask.svg' }
]

const Page = () => (
  <div>
    {apis.map((api) => (
      <Logo name={api.name} path={api.path} src={api.src} />
    ))}
    <p className="footer">Logos von <a href="https://worldvectorlogo.com" target="_blank">worldvectorlogo.com</a></p>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      html, body {
        height: 100%;
        width: 100%
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing:grayscale;
        font-size: 18px;
        line-height: 1.6;
        font-weight: 400;
      }
      .logo {
        transition: transform 10s linear;
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
      }
      .footer {
        position: absolute;
        bottom: 3rem;
        width: 100%;
        text-align: center;
      }
      a,
      a:link,
      a:visited {
        color: #29d;
        text-decoration: none;
      }
      a:hover,
      a:active {
        color: #29d;
        text-decoration: underline;
      }
    `}</style>
  </div>
)

export default Page
