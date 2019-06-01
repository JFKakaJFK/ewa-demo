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
    <p>Logos von <a href="https://worldvectorlogo.com" target="_blank">worldvectorlogo.com</a></p>
  </div>
)

export default Page
