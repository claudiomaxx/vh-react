import { jobsConstants } from '../constants/jobs.constants';
import { IReducerAction } from '.';

export function locations(state = [], action: IReducerAction) {
    switch (action.type) {
        case jobsConstants.LOCATION_LIST:
            return action.payload;
    }

    return state;
}
