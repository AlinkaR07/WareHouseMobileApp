import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    headFirst: { 
        height: 40, 
        backgroundColor: "#1F575E"
    },
    head: {
          height: 40,
          backgroundColor: "#558F96"
    },
    textFirst: {
      textAlign: "left", 
      fontWeight: "bold", 
      fontSize: 22, 
      paddingLeft: 10,
      color: "white" 
    },
    text: {
         textAlign: "center", 
         fontWeight: "bold", 
         fontSize: 22, 
         color: "white" 
    },
    rowFirst: {  
         height: 30,
         backgroundColor: "#1F575E"
    },
    row: {
         height: 30, 
         backgroundColor: "#558F96"
    },
    touchableOpacityView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1F575E",
        height: 45,
        width: '75%',
        borderRadius: 8,
    },
    buttonFunction: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#1F575E",
      height: 30,
      width: 30,
      borderRadius: 5,
      marginTop: -20,
    },
    modalView: {
        marginLeft: '3%',
        marginTop: '50%',
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#002329",
        borderRadius: 5,
        padding: 15,
        shadowColor: "#000",
        width: '95%',
        height: '90%',
        shadowOffset: {
          width: 1,
          height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
    modalEditView:{
      marginLeft: '1%',
      marginTop: '93%',
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "#002329",
      borderRadius: 5,
      padding: 15,
      shadowColor: "#000",
      width: '98%',
      height: '55%',
      shadowOffset: {
        width: 1,
        height: 4
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5
    },
    modalTextHeader: {
        fontSize: 21,
        fontWeight: "bold",
        color: '#1F575E',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 1.5,
        borderBottomColor: '#002329',
      },
      modalText: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 18,
        color: '#1F575E',
      }, 
      input: {
        marginLeft: 5,
        padding: 5,
        backgroundColor: '#B3D0D4',
        width: '95%',
        height: 50,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#00474F',
        fontSize: 18, 
        fontWeight: "semibold", 
        color: 'black'
      },
      input1: {
        marginLeft: 5,
        padding: 5,
        backgroundColor: '#B3D0D4',
        width: 100,
        height: 50,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#00474F',
        fontSize: 18, 
        fontWeight: "semibold", 
        color: 'black'
      },
      containerDataStyle: {
        marginLeft: 5,
        width: 310,
        backgroundColor: '#B3D0D4',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#00474F'
      },
      containerStyle: {
        padding: 1,
        marginLeft: 5,
        width: '95%',
        height: 50,
        backgroundColor: '#B3D0D4',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#00474F'
      },
      containerDataStyle1: {
        marginLeft: 5,
        width: 100,
        backgroundColor: '#B3D0D4',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#00474F'
      },
      containerStyle1: {
        marginLeft: 5,
        width: 100,
        height: 50,
        backgroundColor: '#B3D0D4',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#00474F'
      },
      button: {
        marginLeft: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1F575E",
        height: 30,
        width: '45%',
        borderRadius: 8,
    },
    modalText1: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
        color: '#1F575E',
    },
    modalTovarPlus: {
      flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    listId: {
      marginTop: 10,
      padding: 20,
      backgroundColor: '#B3D0D4',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#00474F',
      fontSize: 22,
      fontWeight: "bold",
    },
    list: {
      marginTop: 24,
      padding: 20,
      backgroundColor: '#B3D0D4',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#00474F',
      fontSize: 18,
      fontWeight: "500",
    },
    flatlist: {
      padding: 10,
      height: '80%',
    },
    searchInput: {
      marginTop: 10,
      marginLeft: '2%',
      backgroundColor: '#B3D0D4',
      padding: 10,
      height: 40,
      width: '95%',
      fontSize: 16,
    },
    listedit: {
      padding: 10,
      fontSize: 18,
      fontWeight: "500",
    },
    listedit1: {
      padding: 10,
      fontSize: 18,
      fontWeight: "500",
      color: "#686868",
    }
});

export default styles;
