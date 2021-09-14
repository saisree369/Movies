import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  loginBtn: {
    width: "60%",
    borderRadius: 25,
    height: 50,
	  flex:1,
    alignItems: "center",
    justifyContent: "center",
	  marginLeft:70,
    backgroundColor: "#B22222",
  }
})
