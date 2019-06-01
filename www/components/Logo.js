import React from 'react'
import 'isomorphic-unfetch'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 50,
      y: 50,
      url: `/api/${props.path}`,
    }
  }

  _update = async () => {
    const { url } = this.state

    const res = await fetch(url)
    if (res.ok) {
      const position = await res.json()
      console.log(position, res)
      this.setState(position)
    }

    this.timeout = setTimeout(this._update, 1000)
  }

  componentDidMount() {
    this._update()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render () {
    const { name, path, src } = this.props
    let { x, y } = this.state
    return (
      <span className="logo" style={{transform: `translate3d(${x}vw, ${y}vh, 0)`}}>
        <img src={src} title={name} width="100" height="100"/>
      </span>
    ) 
  }
}
