import Logo from '../components/Logo'
import 'isomorphic-unfetch'

const langs = [
  { name: 'PHP', path: 'php', ext: '.php' },
  { name: 'Python', path: 'python', ext: '.py' },
  { name: 'Bash', path: 'bash', ext: '.sh' },
  { name: 'Node.js', path: 'node', ext: '.js' },
  { name: 'Flask', path: 'flask', ext: '.py' }
]

const Page = ({nows}) => (
  <div>
    {nows.map(({ name, path, now }) => (
      <a href="#" title={name} key={path}>
        <Logo name={name} path={path} now={now} />
      </a>
    ))}
  </div>
)

Page.getInitialProps = async ({req}) => {
  const protocol = req.headers['x-forwarded-proto']
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const baseUrl = `${protocol}://${host}/api`
  const nows = await Promise.all(langs.map(async ({name, path}) => {
    const now = await (await fetch(`${baseUrl}/${path}`)).text()
    return {name, path, now}
  }))

  return { nows }
}

export default Page
