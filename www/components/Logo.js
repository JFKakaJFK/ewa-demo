import React from 'react'
import 'isomorphic-unfetch'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      now: props.now
    }
  }

  componentDidMount() {
    const { path } = this.props
    const url = `${location.href}api/${path}`

    const update = async () => {
      try {
        const res = await fetch(url)
        if (res.ok) {
          const now = (await res.text()).trim()
          this.setState({now})
        }
      } catch (err) {
        console.error(`Could not fetch time from ${url}`)
      }
      this.timeout = setTimeout(update, 1000)
    }

    this.timeout = setTimeout(update, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render () {
    const { name } = this.props
    const { now } = this.state
    let { x, y } = now.json();
    return (
      <div>
        <span style={`transform: translate3d(${x}vw,${y}vh, 0)`}>{name}</span>
      </div>
    ) 
  }
}
