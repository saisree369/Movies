import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Colors, Fonts, Images, Metrics, ApplicationStyles } from '../../Themes'

export const IS_IOS = Platform.OS === 'ios';
export const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const appSlideHeight = viewportHeight * 0.36;
const appSlideWidth = wp(45);
const appItemHorizontalMargin = wp(2);

const Frutiger = 'Frutiger-Light'
const FrutigerBold = 'Frutiger-Bold'

export const appSliderWidth = viewportWidth;
export const appItemWidth = appSlideWidth + appItemHorizontalMargin * 2;

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        backgroundColor: "#2c2a2a"
    },
    rowContainer: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        flexDirection: 'row'
    },
    columnContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        flexDirection: 'column'
    },
    row: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: Metrics.baseMargin,
        backgroundColor: Colors.fire,
        borderRadius: Metrics.smallMargin
    },
    boldLabel: {
        alignSelf: 'center',
        color: Colors.snow,
        textAlign: 'center',
        marginBottom: Metrics.smallMargin,
        fontFamily: FrutigerBold
    },
    label: {
        alignSelf: 'center',
        color: Colors.snow,
        textAlign: 'center',
        fontFamily: Frutiger
    },
    horizontalListContent: {
        height: 240
    },
    horizontalListChildContent: {
        marginLeft: 10,
        paddingRight: 20
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridContent: {
        flex: 1
    },
    gridChildContent: {
        marginLeft: 15
    },
    listContentItem: {
        padding: 5,
        marginLeft: 0,
        borderBottomWidth: 0.5,
        borderColor: "#c9c9c9"
    },
    listContent: {
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: "#c9c9c9",
        backgroundColor: "#ffffff"
    },
    listContentBody: {
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 0,
        borderColor: "#ffffff"
    },
    listContentText: {
        fontFamily: FrutigerBold,
        ...Platform.select({
            ios: {
                top: 3
            }
        }),
    },
    listContentIcon: {
        borderWidth: 0,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        borderColor: "#ffffff"
    },
    listContentThumbnail: {
        height: 40,
        width: 40
    },
    mb: {
        marginBottom: 15
    },
    heroSlider: {
        flexGrow: 0,
        height:150
    },
    title: {
        color: Colors.black,
        fontSize: 13,
        letterSpacing: 0.5,
        fontFamily: FrutigerBold
    },
    listSection: {
        color: Colors.black,
        fontSize: 20,
        letterSpacing: 0.5,
        marginLeft: 2,
        marginTop: 0,
        marginBottom: -3,
        fontFamily: FrutigerBold,
        color: '#000000'
    },
    listSectionHome: {
        color: Colors.black,
        fontSize: 20,
        letterSpacing: 0.5,
        marginLeft: 18,
        marginTop: 15,
        marginBottom: 5,
        fontFamily: FrutigerBold,
        color: '#000000'
    },
    favoritesHeader: {
        color: Colors.black,
        fontSize: 20,
        textAlign: 'left',
        letterSpacing: 0.5,
        marginTop: 15,
        marginLeft: 18,
        fontFamily: FrutigerBold,
        color: '#000000'
    },
    favoritesBodyText: {
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        fontFamily: Frutiger
    },
    appsListsContainer: {
        flexGrow: 0
    },
    appsListSection: {
        flexGrow: 0
    },
    searchCancelButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Metrics.baseMargin,
        fontFamily: Frutiger
    },
    searchCancelLabel: {
        fontFamily: Frutiger,
        fontSize: 16
    },
    webContentContainer: {
    },
    notchLeft: {
        marginLeft: 30,
        marginRight: 0
    },
    notchRight: {
        marginRight: 40,
        marginLeft: 0
    },
    notchPortrait: {
        marginRight: 0,
        marginLeft: 10
    }
})