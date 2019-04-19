import { jobsConstants } from '../constants';
// import { locationService } from '../services';

export const locationsActions = {
    list,
};

function list() {
    const request = () => ({ type: jobsConstants.LOCATION_LIST_REQUEST });
    const success = (locations: string[]) => {
        return {
            type: jobsConstants.LOCATION_LIST,
            payload: locations,
        };
    };

    return async (dispatch: any) => {
        dispatch(request());
        // const response = await locationService.getLocations();
        dispatch(success([]));
    };
}
