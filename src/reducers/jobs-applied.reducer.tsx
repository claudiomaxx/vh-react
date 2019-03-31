import { jobsConstants } from '../constants/jobs.constants';
import { IReducerState, IReducerAction } from '.';

export function jobsApplied(
    state: IReducerState<string[]> = { value: [] },
    action: IReducerAction
): IReducerState<string[]> {
    switch (action.type) {
        case jobsConstants.APPLY_REQUEST:
            return {
                loading: true,
                value: state.value,
            };

        case jobsConstants.APPLY:
            console.log(state, action);

            return {
                value: [...state.value, action.payload],
            };

        case jobsConstants.CANCEL_APPLICATION_REQUEST:
            return {
                loading: true,
                value: state.value,
            };

        case jobsConstants.CANCEL_APPLICATION:
            console.log(state, action);

            return {
                value: [...state.value.filter(v => v !== action.payload)],
            };
    }

    return state;
}
