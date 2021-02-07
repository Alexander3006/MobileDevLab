import * as React from "react";
import {View, Text, Image, Linking} from "react-native";

export const About = () => {
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image style={{
                margin: 0,
                maxHeight: 200,
                resizeMode: 'contain'
            }}
            source={require('../../public/img/rick.png')}/>

            <Text style={{
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'purple',
                padding: 10,
                borderRadius: 10,
            }}>
                Rozghon Alexander{'\n'}
                Group: IP-83{'\n'}
                SB: IP-8317{'\n'}
                github:
                <Text
                    style={{
                        color: 'red',
                    }}
                    onPress={() => Linking.openURL('https://github.com/Alexander3006')}>
                    {' Alexander3006'}
                </Text>
            </Text>
        </View>
    )
}
