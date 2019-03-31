import { jobsConstants } from '../constants/jobs.constants';
import { IReducerState, IReducerAction } from '.';
import JobType from '../components/types/JobType';

export function jobs(
    state: IReducerState<JobType[]> = { value: [] },
    action: IReducerAction
): IReducerState<JobType[]> {
    switch (action.type) {
        case jobsConstants.JOB_LIST_REQUEST:
            return {
                loading: true,
                value: [],
            };

        case jobsConstants.JOB_LIST:
            return {
                value: action.payload,
            };
    }

    return state;
}
