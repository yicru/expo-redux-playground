import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as countActions from '../actions/counts'

type Props = {
  count: number
  actions: any
}

function CounterBasic(props: Props) {
  const decrementCount = () => {
    let { count, actions } = props
    count--
    actions.changeCount(count)
  }

  const incrementCount = () => {
    let { count, actions } = props
    count++
    actions.changeCount(count)
  }

  return (
    <>
      <View>
        <Button title="+ CounterBasic" onPress={() => incrementCount()} />
        <Text style={{ textAlign: 'center' }}>Count: {props.count}</Text>
        <Button title="- CounterBasic" onPress={() => decrementCount()} />
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  count: state.count.count,
})
const ActionCreators = Object.assign({}, countActions)
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterBasic)
