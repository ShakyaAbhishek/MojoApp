import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  Dimensions,
  Image,
  TouchableHighlightBase,
} from 'react-native';
import ImageLoader from '../components/imageLoader';

const {width, height} = Dimensions.get('window');

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templeteTypes: [
        {type: 'Gold', isSlected: false},
        {type: 'Minimal', isSlected: true},
        {type: 'Photography', isSlected: false},
        {type: 'Fashion', isSlected: false},
        {type: 'Cinema', isSlected: false},
        {type: 'Mirror', isSlected: false},
        {type: 'News', isSlected: false},
        {type: 'Classic', isSlected: false},
        {type: 'Typography', isSlected: false},
        {type: 'Shop', isSlected: false},
        {type: 'Storytelling', isSlected: false},
        {type: 'Gold', isSlected: false},
      ],
      templeteName: [
        {
          templete: 1,
          animationType: 1,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 2,
          animationType: 2,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 3,
          animationType: 3,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 4,
          animationType: 4,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 5,
          animationType: 5,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 6,
          animationType: 6,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 7,
          animationType: 7,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 8,
          animationType: 8,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 9,
          animationType: 9,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 10,
          animationType: 10,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
        {
          templete: 11,
          animationType: 11,
          text: 'Hello',
          image:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        },
      ],
    };
  }

  templeteTypeList = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => this.selectTempleteType(index)}
        activeOpacity={0.7}
        key={index}
        style={{
          marginHorizontal: 15,
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: 'back',
          borderBottomWidth: item.isSlected ? 2 : 0,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: item.isSlected ? '#111111' : '#CACDDD',
          }}>
          {item.type}
        </Text>
      </TouchableOpacity>
    );
  };

  selectTempleteType = index => {
    alert(index);
  };

  cardView = (item, index) => {
    return (
      <TouchableOpacity
        // onPress={() => this.props.navigation.navigate('Templete')}
        activeOpacity={1}
        style={{
          width: width / 1.5,
          height: height / 1.8,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            elevation: 9,
            marginTop: 2,
          }}>
          {/* <Text>{item.text}</Text> */}
          <View style={{flex:1, margin:23}}>
            <ImageLoader
              style={{height: '40%', width: '80%'}}
              source={{uri: item.image}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{height: height, width: width, backgroundColor: '#F9F8F8'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '35%',
              width: ' 7%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 65,
              backgroundColor: 'gray',
              marginRight: 15,
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#ffffff'}}>
              ?
            </Text>
          </View>
        </View>
        <View style={{flex: 9}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 28,
                color: 'black',
                marginLeft: 10,
                fontWeight: '500',
              }}>
              Choose a template
            </Text>
            <FlatList
              style={{marginTop: '7%'}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.templeteTypes}
              extraData={this.state}
              renderItem={({item, index}) => {
                return this.templeteTypeList(item, index);
              }}
              keyExtractor={index => index}
            />
          </View>
          <View
            style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
              style={{paddingTop: '7%'}}
              data={this.state.templeteName}
              horizontal={true}
              extraData={this.state}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return this.cardView(item, index);
              }}
              keyExtractor={index => index}
            />
          </View>
        </View>
      </View>
    );
  }
}

// import React from 'react';
// import { PanGestureHandler, State } from 'react-native-gesture-handler';
// import { View } from 'react-native';
// import Animated from 'react-native-reanimated';

// // const { PanGestureHandler, State } = GestureHandler;

// const {
//   event,
//   set,
//   eq,
//   cond,
//   clockRunning,
//   Clock,
//   Value,
//   stopClock,
//   startClock,
//   spring,
//   debug,
// } = Animated;

// const runSpring = (value, vel, dragState, axis) => {
//   const clock = new Clock();
//   const state = {
//     finished: new Value(0),
//     velocity: new Value(0),
//     position: new Value(0),
//     time: new Value(0),
//   };

//   const config = {
//     toValue: new Value(0),
//     damping: 7,
//     mass: 1,
//     stiffness: 121.6,
//     overshootClamping: false,
//     restSpeedThreshold: 0.001,
//     restDisplacementThreshold: 0.001,
//   };

//   return cond(eq(dragState, State.END), [
//     cond(clockRunning(clock), 0, [
//       set(state.finished, 0),
//       set(state.time, 0),
//       set(state.position, value),
//       set(state.velocity, vel),
//       set(config.toValue, 0),
//       debug(`Start clock ${axis}`, startClock(clock)),
//     ]),
//     cond(
//       state.finished,
//       debug(`Stop clock ${axis}`, stopClock(clock)),
//     ),
//     spring(clock, state, config),
//     state.position,
//   ], value);
// };

// export default class HomeScreen extends React.Component {
//   translationX = new Animated.Value(0);

//   translationY = new Animated.Value(0);

//   velocityX = new Animated.Value(0);

//   velocityY = new Animated.Value(0);

//   dragState = new Value(0);

//   handleGestureEvent = event([
//     {
//       nativeEvent: {
//         velocityX: this.velocityX,
//         velocityY: this.velocityY,
//         translationX: this.translationX,
//         translationY: this.translationY,
//         state: this.dragState,
//       },
//     },
//   ]);

//   position = {
//     x: runSpring(this.translationX, this.velocityX, this.dragState, 'X'),
//     y: runSpring(this.translationY, this.velocityY, this.dragState, 'Y'),
//   };

//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         backgroundColor: '#eee',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//       >
//         <PanGestureHandler
//           onGestureEvent={this.handleGestureEvent}
//           onHandlerStateChange={this.handleGestureEvent}
//         >
//           <Animated.View
//             style={{
//               height: '80%',
//               width: '80%',
//               backgroundColor: '#fff',
//               transform: [{ translateX: this.position.x, translateY: this.position.y }],
//             }}
//           />
//         </PanGestureHandler>
//       </View>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import Animated, { Easing } from 'react-native-reanimated';

// const {
//   Clock,
//   Value,
//   set,
//   cond,
//   startClock,
//   clockRunning,
//   timing,
//   debug,
//   stopClock,
//   block,
// } = Animated;

// function runTiming(clock, value, dest) {
//   const state = {
//     finished: new Value(0),
//     position: new Value(0),
//     time: new Value(0),
//     frameTime: new Value(0),
//   };

//   const config = {
//     duration: 5000,
//     toValue: new Value(0),
//     easing: Easing.inOut(Easing.ease),
//   };

//   return block([
//     cond(
//       clockRunning(clock),
//       [
//         // if the clock is already running we update the toValue, in case a new dest has been passed in
//         set(config.toValue, dest),
//       ],
//       [
//         // if the clock isn't running we reset all the animation params and start the clock
//         set(state.finished, 0),
//         set(state.time, 0),
//         set(state.position, value),
//         set(state.frameTime, 0),
//         set(config.toValue, dest),
//         startClock(clock),
//       ]
//     ),
//     // we run the step here that is going to update position
//     timing(clock, state, config),
//     // if the animation is over we stop the clock
//     cond(state.finished, debug('stop clock', stopClock(clock))),
//     // we made the block return the updated position
//     state.position,
//   ]);
// }

// export class HomeScreen extends Component {
//   // we create a clock node
//   clock = new Clock();
//   // and use runTiming method defined above to create a node that is going to be mapped
//   // to the translateX transform.
//   transX = runTiming(this.clock, -120, 120);

//   render() {
//     return (
//       <View style={styles.container}>
//         <Animated.View
//           style={[styles.box, { transform: [{ translateX: this.transX }] }]}
//         />
//       </View>
//     );
//   }
// }


// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Dimensions, TextInput, TextBase  } from 'react-native';
// import Svg,{Image, Circle, ClipPath} from "react-native-svg";
// import Animated, { Easing } from 'react-native-reanimated';
// import { TapGestureHandler, State } from 'react-native-gesture-handler';
// const { width, height } = Dimensions.get('window');

// const {
//   Value,
//   event,
//   block,
//   cond,
//   eq,
//   set,
//   Clock,
//   startClock,
//   stopClock,
//   debug,
//   timing,
//   clockRunning,
//   interpolate,
//   Extrapolate,
//   concat 
// } = Animated;

// function runTiming(clock, value, dest) {
//   const state = {
//     finished: new Value(0),
//     position: new Value(0),
//     time: new Value(0),
//     frameTime: new Value(0)
//   };

//   const config = {
//     duration: 3000,
//     toValue: new Value(0),
//     easing: Easing.inOut(Easing.ease)
//   };

//   return block([
//     cond(clockRunning(clock), 0, [
//       set(state.finished, 0),
//       set(state.time, 0),
//       set(state.position, value),
//       set(state.frameTime, 0),
//       set(config.toValue, dest),
//       startClock(clock)
//     ]),
//     timing(clock, state, config),
//     cond(state.finished, debug('stop clock', stopClock(clock))),
//     state.position
//   ]);
// }
// class HomeScreen extends Component {
//   constructor() {
//     super();

//     this.buttonOpacity = new Value(1);

//     this.onStateChange = event([
//       {
//         nativeEvent: ({ state }) =>
//           block([
//             cond(
//               eq(state, State.END),
//               set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
//             )
//           ])
//       }
//     ]);

//     this.onCloseState =event([
//       {
//         nativeEvent: ({ state }) =>
//           block([
//             cond(
//               eq(state, State.END),
//               set(this.buttonOpacity, runTiming(new Clock(), 0, 1 ))
//             )
//           ])
//       }
//     ]); 

//     this.buttonY = interpolate(this.buttonOpacity, {
//       inputRange: [0, 1],
//       outputRange: [100, 0],
//       extrapolate: Extrapolate.CLAMP
//     });

//     this.bgY = interpolate(this.buttonOpacity, {
//       inputRange: [0, 1],
//       outputRange: [height / 1 -80, 0],
//       extrapolate: Extrapolate.CLAMP
//     });
//     this.textInputZndex =interpolate(this.buttonOpacity, {
//       inputRange: [0, 1],
//       outputRange: [1, -1],
//       extrapolate: Extrapolate.CLAMP
//     });
//     this.textInputY = interpolate(this.buttonOpacity, {
//       inputRange: [0, 1],
//       outputRange: [0,100],
//       extrapolate: Extrapolate.CLAMP
//     }); 
//     this.textInputOpacity =
//     interpolate(this.buttonOpacity, {
//       inputRange: [0, 1],
//       outputRange: [1,0],
//       extrapolate: Extrapolate.CLAMP
//     });
//     this.rotateCross = interpolate(this.buttonOpacity, {
//       inputRange: [0, 1],
//       outputRange: [180,360],
//       extrapolate: Extrapolate.CLAMP
//     });
//   }
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'white',
//           justifyContent: 'flex-end'
//         }}
//       >
//         <View style={{height:height/2, width:width, backgroundColor:'red'}}>
//         <Svg height={height + 50} width={width}>
//             <ClipPath id="clip">
//               <Circle
//                 r={height + 50}
//                 cx={width/2 }
//               />
//             </ClipPath>
//           <Image
//             href={{uri :'https://thumbs.dreamstime.com/b/autumn-oak-leaf-fantastic-beautiful-spray-bubbles-blue-background-magic-autumn-blue-background-yellow-oak-leaf-158238643.jpg'}}
//             height={height + 50}
//             width={width}
//             preserveAspectRatio = "xMidYMid slice"
//             clipPath="url(#clip)"
//           />
//           </Svg>
//         </View>
//         <Animated.View
//           style={{
//             ...StyleSheet.absoluteFill,
//             transform: [{ translateY: this.bgY }]
//           }}
//         >
//           <Svg height={height + 50} width={width}>
//             <ClipPath id="clip">
//               <Circle
//                 r={height + 50}
//                 cx={width/2 }
//               />
//             </ClipPath>
//           <Image
//             href={{uri :'https://www.publicdomainpictures.net/download-picture.php?id=28763&check=40d0c7d2a335794339b3a2023655e58f'}}
//             height={height + 50}
//             width={width}
//             preserveAspectRatio = "xMidYMid slice"
//             clipPath="url(#clip)"
//           />
//           </Svg>
//         </Animated.View>
//         <View style={{ height: height / 3, justifyContent: 'center' }}>
//           <TapGestureHandler onHandlerStateChange={this.onStateChange}>
//             <Animated.View
//               style={{
//                 ...styles.button,
//                 opacity: this.buttonOpacity,
//                 transform: [{ translateY: this.buttonY }]
//               }}
//             >
//               <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Show</Text>
//             </Animated.View>
//           </TapGestureHandler>
//           <Animated.View style={{height:height/3.9, ...StyleSheet.absoluteFill, top:null, justifyContent:'center', zIndex:this.textInputZndex, opacity:this.textInputOpacity, transform:[{translateY: this.textInputY}] }}>
            
//             <TapGestureHandler onHandlerStateChange={this.onCloseState }>
//                <Animated.View style={styles.closeButton}>
//                  <Animated.Text style={{fontSize:15, transform:[{rotate:concat(this.rotateCross, 'deg')}]}}>X</Animated.Text>
//                </Animated.View>
//             </TapGestureHandler> 
//           </Animated.View>
//         </View>
//       </View>
//     );
//   }
// }
// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   button: {
//     backgroundColor: 'white',
//     height: 70,
//     marginHorizontal: 20,
//     borderRadius: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 5,
//     elevation:3,
//     shadowOffset:{height:2, width:2},
//     shadowColor:'black',
//     shadowOpacity:0.2 
//   },
//   closeButton:{
//     height:40,
//     width:40,
//     backgroundColor:"white",
//     borderRadius:20,
//     justifyContent:'center',
//     alignItems:'center',
//     position:'absolute',
//     top:-70,
//     elevation:3,
//     left: width/ 2 -20, 
//   },
// });



// =------------=-==--=-=-=---------------------------------==-=-=-=-=-=-=-=-=-==/
// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import Animated from 'react-native-reanimated';

// const {
//   block,
//   set,
//   cond,
//   eq,
//   spring,
//   startClock,
//   Value,
//   Clock,
//   SpringUtils,
// } = Animated;

// function runSpring(clock, value, config) {
//   const state = {
//     finished: new Value(1),
//     velocity: new Value(0),
//     position: new Value(0),
//     time: new Value(0),
//   };

//   return block([
//     cond(state.finished, [
//       set(state.finished, 0),
//       set(state.position, value),
//       set(config.toValue, cond(eq(config.toValue, 100), -100, 100)),
//       startClock(clock),
//     ]),
//     spring(clock, state, config),
//     state.position,
//   ]);
// }

// class Snappable extends Component {
//   constructor(props) {
//     super(props);
//     const transX = new Value();
//     const clock = new Clock();
//     this._transX = runSpring(clock, transX, props.config);
//   }
//   render() {
//     const { children } = this.props;
//     return (
//       <Animated.View style={{ transform: [{ translateX: this._transX }] }}>
//         {children}
//       </Animated.View>
//     );
//   }
// }

// const configA = SpringUtils.makeDefaultConfig();
// const configB = SpringUtils.makeConfigFromBouncinessAndSpeed({
//   ...SpringUtils.makeDefaultConfig(),
//   bounciness: 10,
//   speed: 8,
// });
// const configC = SpringUtils.makeConfigFromOrigamiTensionAndFriction({
//   ...SpringUtils.makeDefaultConfig(),
//   tension: 10,
//   friction: new Value(4),
// });

// export default class Example extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Snappable config={configA}>
//           <View style={styles.box} />
//         </Snappable>
//         <Snappable config={configB}>
//           <View style={styles.box} />
//         </Snappable>
//         <Snappable config={configC}>
//           <View style={styles.box} />
//         </Snappable>
//       </View>
//     );
//   }
// }

// const CIRCLE_SIZE = 70;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     backgroundColor: 'tomato',
//     marginLeft: -(CIRCLE_SIZE / 2),
//     marginTop: -(CIRCLE_SIZE / 2),
//     width: CIRCLE_SIZE,
//     height: CIRCLE_SIZE,
//     margin: CIRCLE_SIZE,
//     borderRadius: CIRCLE_SIZE / 2,
//     borderColor: '#000',
//   },
// });