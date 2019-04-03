import { jobsConstants } from '../constants/jobs.constants';
import { IReducerAction } from '.';

export function skills(state = [], action: IReducerAction) {
    switch (action.type) {
        case jobsConstants.SKILL_LIST:
            return action.payload;
    }

    return state;
}
