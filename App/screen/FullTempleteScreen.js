import React, {Component} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class FullTempleteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 56,
            width: width,
            backgroundColor: '#111111',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text style={{color: '#ffffff', fontSize: 18}}>{'< Back'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: '#ffffff', fontSize: 18, marginRight: 10}}>
              {'Save'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: width / 1.2,
              height: height / 1.5,
              backgroundColor: '#ffffff',
              elevation: 6,
            }}>
            <View
              style={{
                height: '10%',
                width: '15%',
                backgroundColor: '#e7e7e7',
                position: 'absolute',
                zIndex: 10,
                elevation: 6,
                bottom: -25,
                left:-20,
                borderRadius:60,
                justifyContent:'center',
                alignItems:'center'
              }}>
                <Text style={{color:"#111111"}}>Edit</Text>
              </View>
          </View>
        </View>
      </View>
    );
  }
}
