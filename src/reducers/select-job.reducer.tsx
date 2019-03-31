import { jobsConstants } from '../constants/jobs.constants';
import { IReducerAction } from '.';

export function selectedJob(state = '', action: IReducerAction): string {
    switch (action.type) {
        case jobsConstants.JOB_SELECT:
            console.log('job select', state);
            return action.payload;
    }

    return state;
}
