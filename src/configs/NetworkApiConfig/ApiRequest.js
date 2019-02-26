import {create} from 'apisauce';
import Constants from '../ApiConfigs';

const ApiRequest = create({
    baseURL: Constants.BASE_URL, timeout: 30000
});

export default ApiRequest;