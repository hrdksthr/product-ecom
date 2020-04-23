import React, { Component } from 'react'
import { connect } from 'react-redux'

const presenter = (
  mapStateToProps = () => {
    return {}
  },
  mapDispatchToProps = {}
) => (Presenter, ViewComp) => {
  if (Presenter && ViewComp) {
    class WrappedView extends Component {
      constructor(props) {
        super(props)
        this.pm = new Presenter(props, this)
      }

      shouldComponentUpdate(nextProps, nextState) {
        if (this.pm.shouldComponentUpdate) {
          return this.pm.shouldComponentUpdate(nextProps, nextState)
        }
        return true
      }

      componentDidMount(prevProps, prevState, snapshot) {
        this.pm.fetch && this.pm.fetch(prevProps, prevState, snapshot)
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
        this.pm.update && this.pm.update(prevProps, prevState, snapshot)
      }
      componentWillUnmount() {
        this.pm.dispose && this.pm.dispose()
      }
      render() {
        return <ViewComp {...this.props} pm={this.pm} />
      }
    }
    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WrappedView)
  }
  return ViewComp
}
export default presenter
