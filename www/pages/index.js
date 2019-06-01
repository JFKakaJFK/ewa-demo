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
    {apis.map(({ name, path, src }) => (
      
      <span>
        <img src={src} title={name} />
      </span>
    ))}
  </div>
)

export default Page
