import React from 'react'
import LottieView from 'lottie-react-native';

import load_animated from '../../assets/rocket.json';

import {
    Container,
} from './styles';

export function LoadAnimation() {
    return (
        <Container>
          <LottieView
            source={load_animated}
            style={{ height: 200 }}
            resizeMode='contain'
            autoPlay
            loop
          />
        </Container>
    )
}