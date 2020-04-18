import React, { Component, useEffect } from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { increment, decrement } from './countsSlice'

type Props = {
  counts: number
  increment: () => number
  decrement: () => number
}

function CounterRTKwithSliceConnect(props: Props) {
  useEffect(() => {
    console.log('!@# this.props: ', props)
  })

  return (
    <View>
      <Button title="+ RTKwithSliceConnect" onPress={() => props.increment()} />
      <Text style={{ textAlign: 'center' }}>Count: {props.counts}</Text>
      <Button title="- RTKwithSliceConnect" onPress={() => props.decrement()} />
    </View>
  )
}

const mapStateToProps = (state) => ({
  counts: state.counts,
})
const mapDispatchToProps = { increment, decrement }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterRTKwithSliceConnect)
