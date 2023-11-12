import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "white",
        padding: 15,
        width: '100%',
        height: '100%',
    },
    modalTextHeader: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#1F575E',
    },
    modalHeader: {
        paddingTop: '10%',
        paddingBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      },
      input: {
        marginLeft: 15,
        marginTop: '7%',
        padding: 5,
        paddingLeft: 25,
        backgroundColor: '#B3D0D4',
        width: '90%',
        height: 60,
        borderRadius: 3,
        borderWidth: 1.5,
        borderColor: '#00474F',
        fontSize: 18, 
        fontWeight: "semibold", 
        color: 'black'
      },
      input1: {
        marginLeft: 8,
        marginTop: '7%',
        padding: 5,
        paddingLeft: 25,
        backgroundColor: '#B3D0D4',
        width: '90%',
        height: 60,
        borderRadius: 3,
        borderWidth: 1.5,
        borderColor: '#00474F',
        fontSize: 18, 
        fontWeight: "semibold", 
        color: 'black'
      },
    touchableOpacityView: {
        marginTop: '20%',
        marginBottom: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1F575E",
        height: 45,
        width: '85%',
        borderRadius: 5,
    },
});

export default styles;