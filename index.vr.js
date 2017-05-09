import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('sky.jpg')}/>

        <Model 
          source={{ obj: asset('huerto.obj'), mtl: asset('huerto.mtl') }} 
          lit={ true } 
          style={{
            transform: [
              { translate: [0, -20, 0] }
            ],
          }}
        />
        <Model 
          source={{ obj: asset('zanahoria.obj'), mtl: asset('zanahoria.mtl') }}
          lit={ true }
          style={{
            transform: [
              { translate: [0, 0, -5] }
            ],
          }}
        />
        <AmbientLight intensity={ 2.6 } />

        { //<Text
        //  style={{
        //    backgroundColor: '#777879',
        //    fontSize: 0.8,
        //    fontWeight: '400',
        //    layoutOrigin: [0.5, 0.5],
        //    paddingLeft: 0.2,
        //    paddingRight: 0.2,
        //    textAlign: 'center',
        //    textAlignVertical: 'center',
        //    transform: [{translate: [0, 0, -6]}],
        //  }}>
        //  Welcome to Ingenious
        //</Text>
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
