import { StyleSheet, View, Text, Modal } from 'react-native'

export default function PlantView() {
    return (
        <View>
            <Modal style={{height: '100px'}}>
                <Text style={style.box1}>Plant 1</Text>
                <Text style={style.box2}>Plant 2</Text>
            </Modal>
        </View>
    );
}

const style = StyleSheet.create({
    box1: {
        backgroundColor: 'blue',
        flex: 1,
    },
    box2: {
        backgroundColor: 'green',
        flex: 1,
    },
})