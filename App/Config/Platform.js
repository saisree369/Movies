import DeviceInfo from 'react-native-device-info';
import GlobalProps from './GlobalProps'

/**
 *
 * @param {ScaledSize} dim the dimensions object
 * @param {*} limit the limit on the scaled dimension
 */
const msp = (dim, limit) => {
    return (dim.scale * dim.width) >= limit || (dim.scale * dim.height) >= limit;
};

const getStore = () => {
    if (DeviceInfo.getSystemName().includes("Android")) {
        return "google";
    } else {
        return "apple";
    }
}

const getUniqueId = () => {
    return DeviceInfo.getUniqueID();
}

const getAppOS = () => {
    return DeviceInfo.getSystemName() + " " + DeviceInfo.getSystemVersion();
}

const getAppOSVersion = () => {
    return DeviceInfo.getSystemVersion();
}

const isAndroid = () => {
    return DeviceInfo.hasNotch() && DeviceInfo.getSystemName().includes("Android");
}

const getDeviceId = () => {
    return DeviceInfo.getDeviceId();
}

const getDeviceModel = () => {
    return DeviceInfo.getModel();
}

const getAppVersion = () => {
    return DeviceInfo.getVersion();
}

const isPortrait = () => {
    return !isLandscape();
};

const isLandscape = () => {
    return  GlobalProps.orientation.startsWith("LANDSCAPE");
};

const isTablet = () => {
    return DeviceInfo.isTablet();
};

const isPhone = () => { return !isTablet(); }

// Model & ID chart at https://everyi.com/by-identifier/ipod-iphone-ipad-specs-by-model-identifier.html
const isIPhoneX = () => { return DeviceInfo.getDeviceId().includes("iPhone10,3") || DeviceInfo.getDeviceId().includes("iPhone10,6") }

const isIPhoneXR_XS = () => { return DeviceInfo.getDeviceId().includes("iPhone11") }

const isNotchedIPhone = () => { return DeviceInfo.hasNotch() && DeviceInfo.getDeviceId().includes("iPhone") }


const isNotchedAndroid = () => { return DeviceInfo.hasNotch() && DeviceInfo.getDeviceId().includes("Android") }

const isIpadPro = () => {
    return (DeviceInfo.isTablet() && DeviceInfo.getModel().includes("Pro"));
}

const isIpadMini = () => {
    return (DeviceInfo.isTablet() && DeviceInfo.getModel().includes("Mini"));
}

export default {
    getStore,
    getUniqueId,
    getAppOS,
    isAndroid,
    getAppOSVersion,
    getDeviceId,
    getDeviceModel,
    getAppVersion,
    isPortrait,
    isLandscape,
    isTablet,
    isPhone,
    isIPhoneX,
    isIPhoneXR_XS,
    isNotchedIPhone,
    isIpadPro,
    isIpadMini
};