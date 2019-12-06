import { LONG_POLLING_BASE_URL } from '../config/constants';

export const sendLongPollingRequest = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${LONG_POLLING_BASE_URL}/`)
            .then(res => {
                return res.json()
            })
            .then(
                result => resolve(result),
                error => reject(error)
            );
    });
};
                                                                                                           