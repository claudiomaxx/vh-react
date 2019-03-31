import { combineReducers } from 'redux';
import { jobs } from './jobs.reducer';
import { selectedJob } from './select-job.reducer';
import { jobsApplied } from './jobs-applied.reducer';

export interface IReducerState<T> {
    value: T;
    loading?: boolean;
}

export interface IReducerAction {
    type: string;
    payload?: any; // TODO improve this type
}

export default combineReducers({
    jobs,
    selectedJob,
    jobsApplied,
});
