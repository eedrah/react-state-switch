import { Component } from 'react'
import { func, bool } from 'prop-types'

export default class ExampleComponent extends Component {
  static propTypes = {
    children: func,
    default: bool,
  }

  constructor(props) {
    super(props)
    this.state = { state: props.default || false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ state: !this.state.state })
  }

  render() {
    return this.props.children(this.toggle, this.state.state)
  }
}
