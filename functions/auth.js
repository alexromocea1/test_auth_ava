import { AuthenticationContext } from "react-adal";

const adalConfig = {
  tenant: "AvanadeAzurelive.onmicrosoft.com",
  clientId: "47545026-9a1c-4a90-bb75-9fcc642a6c5a",
  endpoints: {
    api:
      "https://AvanadeAzurelive.onmicrosoft.com/47545026-9a1c-4a90-bb75-9fcc642a6c5a"
  },
  postLogoutRedirectUri: window.location.origin,
  redirectUri: "http://localhost:3000",
  cacheLocation: "sessionStorage"
};

export const authContext = new AuthenticationContext(adalConfig);
export const getToken = () => {
  return authContext.getCachedToken(authContext.config.clientId);
};
