import { StyleSheet, View, Text, Button, Dimensions, ImageBackground } from 'react-native'
import PlantBox from '../../components/PlantBox'
import background from '../../../assets/background.png'

const Dashboard = () => {

  const plantlist = ['Monstera', 'Snake Plant', 'ZZ Plant', 'Raven ZZ Plant', 'Aloe', 'Pothos', 'Sheflera'];

  const plantCardList = (
    <View style={styles.flexcontainer}>
      <View style={styles.column}>
        {plantlist.slice(0, plantlist.length/2+1).map((plant) => 
          <PlantBox name={plant} />
        )}
      </View>
      <View style={styles.column}>
      {plantlist.slice(plantlist.length/2+1, plantlist.length).map((plant) => 
          <PlantBox name={plant} />
        )}
      </View>
    </View>
  )
  return (
    <View>
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.h1}>My Plants</Text>
        </View>
        <View style={styles.body}>
          <Text>{plantCardList}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  flexcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  column: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get("screen").width, 
    height: Dimensions.get("screen").height,
  },
  plantboxes: {
    alignContent: "space-between",
  },
  h1: {
    fontSize: '50px',
    marginLeft: 15,
    color: 'white',
  },
  header: {
    flex: .20,
    justifyContent: 'flex-end',
  },
  body: {
    flex: .80,
  },
});

export default Dashboard;