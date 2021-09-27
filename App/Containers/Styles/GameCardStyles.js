import { StyleSheet, Platform } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'

const Frutiger = 'Frutiger-Light'
const FrutigerBold = 'Frutiger-Bold'

export default StyleSheet.create({
    cardWidthHome: {
        marginLeft: 10,
        marginRight: 10,
        width: 130,
    },
    cardHeightHome: {
        marginTop: 10,
        marginBottom: 10,
        height: 220,
    },
    cardWidthGrid: {
        marginLeft: 10,
        marginRight: 10,
        width: 150,
    },
    cardHeightGrid: {
        marginTop: 10,
        marginBottom: 10,
        height: 230,
    },
    cardViewBase: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'center',
        backgroundColor: '#f2f2f2',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        ...Platform.select({
            android: {
                shadowOpacity: 0.05,
            },
            ios: {
                shadowOpacity: 0.2,
            },
        }),
        shadowRadius: 1.5,
        elevation: 2,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    cardView: {
        height: 220,
    },
    cardViewGrid: {
        height: 230,
    },
    cardVirtual: {
        backgroundColor: '#eaeaea',
        borderBottomWidth: 2,
        borderBottomColor: '#4DB1DE'
    },
    cardImageBase: {
        borderRadius: Metrics.smallMargin
    },
    cardImage: {
        width: 130,
        height: 130
    },
    cardImageGrid: {
        width: 150,
        height: 150
    },
    imageOverlayBase: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        position: 'absolute',
        bottom: 5
    },
    imageOverlay: {
        width: 135
    },
    imageOverlayGrid: {
        width: 155
    },
    gvRatingContainer: {
        flex: 9,
        marginRight: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 4,
        padding: 3
    },
    gvRatingBar: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    gvRatingBar10: {
        right: '0%',
        backgroundColor: 'green',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    gvRatingBar9: {
        right: '10%',
        backgroundColor: '#1ABB4C'
    },
    gvRatingBar8: {
        right: '20%',
        backgroundColor: '#1ABB4C'
    },
    gvRatingBar7: {
        right: '30%',
        backgroundColor: '#B9BE3D'
    },
    gvRatingBar6: {
        right: '40%',
        backgroundColor: '#B9BE3D'
    },
    gvRatingBar5: {
        right: '50%',
        backgroundColor: '#B9BE3D'
    },
    gvRatingBar4: {
        right: '60%',
        backgroundColor: '#B9BE3D'
    },
    gvRatingBar3: {
        right: '70%',
        backgroundColor: '#BB6A00'
    },
    gvRatingBar2: {
        right: '80%',
        backgroundColor: '#BB6A00'
    },
    gvRatingBar1: {
        right: '90%',
        backgroundColor: '#BB6A00'
    },
    gvRatingBar0: {
        right: '95%',
        backgroundColor: '#BB1C1A'
    },
    gvRating: {
        fontSize: 12,
        textAlign: 'left',
        color: '#fff',
        fontFamily: FrutigerBold,
        ...Platform.select({
            android: {
                top: 1,
            },
            ios: {
                top: 3,
            },
        }),
        left: 3
    },
    gvPriceContainer: {
        flex: 6,
        marginRight: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: 4,
        padding: 4
    },
    price: {
        fontSize: 12,
        textAlign: 'right',
        color: '#fff',
        fontFamily: FrutigerBold,
        ...Platform.select({
            ios: {
                top: 2,
            },
        }),
        right: 2
    },
    textArea: {
        width: 125,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        marginTop: 5,
        paddingLeft: 10
    },
    textAreaGrid: {
        width: 145,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        marginTop: 5,
        paddingLeft: 10
    },
    appStoreRatingSection: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5
    },
    appStoreRating: {
        fontSize: 12,
        textAlign: 'left',
        color: '#646464',
        fontFamily: FrutigerBold
    },
    appStoreRatingStar: {
        height: 11,
        width: 65,
        alignSelf: 'flex-start'
    },
    appStoreRatingCount: {
        fontSize: 11,
        marginLeft: 2,
        color: '#646464',
        fontFamily: Frutiger
    },
    title: {
        fontSize: 14,
        fontFamily: FrutigerBold,
        lineHeight: 14,
        textAlign: 'left',
        marginTop: 2, 
        color: '#000000',
        ...Platform.select({
            android: {
                marginTop: 5,
                marginBottom: 3
            },
        }),
    },
    author: {
        fontSize: 11,
        lineHeight: 11,
        textAlign: 'left',
        marginTop: 2,
        fontFamily: Frutiger,
        color: '#000000'
    },
    infoFavorites: {
        position: 'absolute',
        top: -6,
        right: 0
    },
    infoFavoritesIcon: {
        height: 22,
        width: 22,
        fontSize: 22,
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2
    },
    infoFavoritesIconActive: {
        height: 22,
        width: 22,
        fontSize: 22,
        color: '#AE4439',
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2
    },
    virtualButton: {
        position: 'absolute',
        bottom: 4,
        right: 0,
        backgroundColor: 'transparent',
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 3,
        height: 'auto',
        width: 'auto',
        shadowOpacity: 0,
        elevation: 0
    },
    virtualIcon: {
        fontSize: 15,
        color: '#4DB1DE',
        padding: 0,
        marginLeft: 0,
        marginRight: 0
    },
    textVirtual: {
        color: '#ffffff'
    },
    installed: {
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#4DB1DE',
        fontFamily: FrutigerBold,
        padding: 4,
        borderColor: '#4DB1DE',
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 3,
        height: 19
    },
    cardWrapper: {
        paddingBottom: 10
    }
})