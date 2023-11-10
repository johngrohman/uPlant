import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import background from '../../../assets/background.png'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Onboarding() {
    return (
        <View>
            <ImageBackground source={background} resizeMode="cover" style={styles.background}>
                <Text style={styles.text}>uPlant</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        width: screenWidth,
    },
    text: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'Inika-Regular',
        lineHeight: 84, 
        fontWeight: 'bold',
        textAlign: 'center',
        verticalAlign: 'auto',
    },
})