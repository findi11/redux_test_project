import getUrlQuery from "../utils/getUrlQuery";

const ApiConfig = {
  // BASE_URL: "https://baconipsum.com",
  DATA: `https://baconipsum.com/api/?type=meat-and-filler`,
  // EVEl: `https://evilinsult.com/generate_insult.php?lang=en`,
  JSON: `https://jsonplaceholder.typicode.com/posts?_limit=10_`,
  SINGUP: `https://api-app-strimm.nwdev.net/api/v1/services/mobile/auth/register`,
  LOGIN: `https://api-app-strimm.nwdev.net/api/v1/services/mobile/auth/login`,
  ME: `https://api-app-strimm.nwdev.net/api/v1/services/mobile/auth/me`,
  LOGOUT: `https://api-app-strimm.nwdev.net/api/v1/services/mobile/auth/logout`,
  changePassword: `https://api-app-strimm.nwdev.net/api/v1/services/mobile/auth/password/change`,
};

export default ApiConfig;
