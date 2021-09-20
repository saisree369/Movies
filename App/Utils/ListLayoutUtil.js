
import { Dimensions } from 'react-native';

import Platform from '../Config/Platform'

import styles from '../Containers/Styles/MovieCardStyles'


export default class LayoutUtil {
    static getWindowWidth() {
        // sometimes Dimensions.get() returns to wrong value, so calculate based on orientation
        const dimWidth = Dimensions.get('window').width;
        const dimHeight = Dimensions.get('window').height;
        const screenWidth = Platform.isLandscape() ? Math.max(dimWidth, dimHeight) : Math.min(dimWidth, dimHeight);
        
        if (Platform.isAndroid()) {
            // to deal with precision issues on android
            return Math.round(screenWidth * 1000) / 1000 - 2; 
        } else {
            return Math.round(screenWidth * 1000) / 1000 - 0; 
        }
    }

    static getLayoutProvider(type, isGrid) {
        // calculate number of GameCards that can fit in a screen
        let windowWidth = LayoutUtil.getWindowWidth();

        // horizontal recyclerview
        let gameCardwidth = styles.cardWidthHome.width + styles.cardWidthHome.marginLeft + styles.cardWidthHome.marginRight;
        let gameCardheight = styles.cardHeightHome.height + styles.cardHeightHome.marginTop + styles.cardHeightHome.marginBottom;

        if (isGrid) {
            gameCardwidth = styles.cardWidthGrid.width + styles.cardWidthGrid.marginLeft + styles.cardWidthGrid.marginRight;
            gameCardheight = styles.cardHeightGrid.height + styles.cardHeightGrid.marginTop + styles.cardHeightGrid.marginBottom;
            if (Platform.isAndroid() && !Platform.isPortrait()) {
                windowWidth = LayoutUtil.getWindowWidth() - 60;
            }
            if (Platform.isAndroid() && !Platform.isPortrait()) {
                windowWidth = LayoutUtil.getWindowWidth() - 40;
            }
        }

        const numCards = Math.floor(windowWidth / gameCardwidth);

       
    }

    // logic copied from getLayoutProvider
    static getRowCardsVisible(isGrid, leftNotchWidth, rightNotchWidth) {
        // calculate number of GameCards that can fit in a screen
        let windowWidth = LayoutUtil.getWindowWidth();

        // handle notches
        if (leftNotchWidth) {
         //   windowWidth -= screenStyles.notchLeft.marginLeft;
        }
        else if (rightNotchWidth) {
        //    windowWidth -= screenStyles.notchRight.marginRight;
        }

        // horizontal recyclerview
        const gameCardwidth = (isGrid) ? styles.cardWidthGrid.width + styles.cardWidthGrid.marginLeft + styles.cardWidthGrid.marginRight : styles.cardWidthHome.width + styles.cardWidthHome.marginLeft + styles.cardWidthHome.marginRight;

        const value = windowWidth / gameCardwidth;
        // const numCards = value.toFixed(0);
        const numCards = Math.floor(value);

        return numCards;
    }

    static getCardHeight() {
        return styles.cardHeightHome.height + styles.cardHeightHome.marginTop + styles.cardHeightHome.marginBottom;
    }
}
