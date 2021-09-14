export const analytics = {
  defaultParams: null,
  initCompleted: false,
  pendingForUserId: []
}

export const workflow = {
  appCampaignId: null,
  workflowId: null,
  name: null,
  definition: null,
  currentState: null,
  reentrantLockEnabled: false,
  reentryErrorLogged: false,
  screenCounters: {},

  // for webview
  rootContainer: null,
  webViewTransition: null
}

export const auth = {
  isAuthenticated: false,
  user: null,
  idToken: null,
  userId: null,
  initCompleted: false
}

export const messaging = {
  initCompleted: false
}

export const icons = {
  initAppIds: null
}

export default {
  test: false,
  storeName: "apple",
  isTablet: false,
  isIpadPro: false,
  isIpadMini: false,
  dataProvider: null,
  layoutProvider: null,
  gridCNumCardsColumn: null,
  deviceId: null,
  gvModeEnabled: false,
  orientation: null,
  footerMiniMenuVisible: false
}