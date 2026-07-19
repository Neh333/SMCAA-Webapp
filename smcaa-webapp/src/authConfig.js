// Azure AD (Entra ID) App Registration configuration for MSAL.
//
// clientId and tenantId are NOT secrets — they are safe to ship in a SPA bundle.
// A SPA must NOT use a client secret; it uses the Authorization Code flow with PKCE.
//
// Values are read from build-time environment variables (see .env), with the
// registered app's IDs as fallbacks so the app works out of the box.

const clientId = process.env.REACT_APP_AZURE_CLIENT_ID || '1ba57d22-6a43-4076-939f-6a88406578ad';
const tenantId = process.env.REACT_APP_AZURE_TENANT_ID || 'e38419c3-ab61-40d7-b9ff-764e713ae18e';

export const msalConfig = {
  auth: {
    clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    // Defaults to wherever the app is served (localhost in dev, your hosting URL
    // in production). Each origin used here must also be registered as a SPA
    // redirect URI in the Azure App Registration.
    redirectUri: process.env.REACT_APP_REDIRECT_URI || window.location.origin,
    postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI || window.location.origin,
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

// Scopes requested at sign-in. Add API scopes here as needed.
export const loginRequest = {
  scopes: ['User.Read'],
};
