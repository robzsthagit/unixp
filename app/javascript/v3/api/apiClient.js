import axios from 'axios';

const { apiHost = '' } = window.unixpConfig || {};
const wootAPI = axios.create({ baseURL: `${apiHost}/` });

export default wootAPI;
