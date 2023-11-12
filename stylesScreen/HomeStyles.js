import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {                               //заголовок страницы
        fontSize: 35,
        fontWeight: "bold",
        color: '#1F575E',
        paddingTop: 20,
        textAlign: 'center',
    },
    smalltitle: {                       //подзаголовки О НАС и МЫ в МЕСЕНДЖКРАХ
        fontSize: 25,
        paddingTop: 25,
        paddingLeft: 40,
        fontWeight: "semibold",
        color: '#1F575E',
        textDecorationLine: 'underline',
    },
    viewIconText: {
        flexDirection: "row",
        alignItems: 'center',
        paddingTop: 8,
        paddingLeft: 1,
    },
    text: {
        fontSize: 18,
        paddingLeft: 5,
    },
    textunderline: {
        fontSize: 18,
        textDecorationLine: 'underline',
        paddingLeft: 5,
    },
    safearea: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        height: 450,
    },
    textHeader: {
        color: 'white',
        fontSize: 25,
        fontWeight: "semibold",
        paddingLeft: 100,
    },
    touchableOpacityView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1F575E",
        height: 45,
        width: '40%',
        borderRadius: 8,
        marginBottom: '1%',
    },
    touchableOpacityView1: {
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

  export default styles;