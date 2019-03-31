import JobType from '../components/types/JobType';
import { jobsConstants } from '../constants';
import { jobService } from '../services';

export const jobsActions = {
    list,
    select,
    apply,
    cancelApplication,
};

function list(filter: any) {
    const request = () => ({ type: jobsConstants.JOB_LIST_REQUEST });
    const success = (jobs: JobType[]) => {
        return {
            type: jobsConstants.JOB_LIST,
            payload: jobs,
        };
    };

    return async (dispatch: any) => {
        dispatch(request());
        const response = await jobService.getJobs();
        dispatch(success(response));
    };
}

function select(jobId: string) {
    return {
        type: jobsConstants.JOB_SELECT,
        payload: jobId,
    };
}

function apply(jobId: string) {
    const request = () => ({ type: jobsConstants.APPLY_REQUEST });
    const success = () => ({ type: jobsConstants.APPLY, payload: jobId });

    return async (dispatch: any) => {
        dispatch(request());
        // const response = await jobService.apply(jobId);
        dispatch(success());
    };
}

function cancelApplication(jobId: string) {
    const request = () => ({ type: jobsConstants.CANCEL_APPLICATION_REQUEST });
    const success = () => ({
        type: jobsConstants.CANCEL_APPLICATION,
        payload: jobId,
    });

    return async (dispatch: any) => {
        dispatch(request());
        // const response = await jobService.cancelApplication(jobId);
        dispatch(success());
    };
}
