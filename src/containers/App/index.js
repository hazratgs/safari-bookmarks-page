import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getAllBookmarks } from '../../actions/App'

import Title from '../../components/Title'
import Background from '../../components/Background'
import Elements from '../../components/Elements'

@withRouter
@connect(
  state => ({
    items: state.App.items
  }),
  dispatch => ({
    getAllBookmarks: bindActionCreators(getAllBookmarks, dispatch)
  })
)
export default class App extends PureComponent {
  componentDidMount () {
    this.props.getAllBookmarks()
  }

  render () {
    return (
      <Background>
        <Title>Избранное</Title>
        <Elements items={this.props.items}/>
      </Background>
    )
  }
}
