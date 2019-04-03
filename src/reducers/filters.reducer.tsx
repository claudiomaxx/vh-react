import { jobsConstants } from '../constants/jobs.constants';
import { IReducerAction } from '.';

export function filters(state = [], action: IReducerAction) {
    switch (action.type) {
        case jobsConstants.SELECT_LOCATION:
            return action.payload;
        case jobsConstants.SELECT_SKILL:
            return action.payload;
    }

    return state;
}
