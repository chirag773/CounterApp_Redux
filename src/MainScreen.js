import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { incrementCounter,decrementCounter } from "./actions/counterAction";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        counter:0
    };
  }

  increment(){
      this.props.incrementCounter()
  }
  decrement(){
      this.props.decrementCounter()
  }

  render() {
      const { count } = this.props.count;
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}> 
        <Text>{count}</Text>
        <TouchableOpacity onPress={this.increment.bind(this)} style={{borderWidth:1, marginTop:10}}>
            <Text>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.decrement.bind(this)} style={{borderWidth:1, marginTop:10}}>
            <Text>DECREMENT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
    count:state.count
  });
  
  export default connect(
    mapStateToProps,
    {
      incrementCounter,
      decrementCounter
    }
  )(MainScreen);