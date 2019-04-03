import { jobsConstants } from '../constants';
import { skillService } from '../services';

export const skillsActions = {
    list,
};

function list() {
    const request = () => ({ type: jobsConstants.SKILL_LIST_REQUEST });
    const success = (skills: string[]) => {
        return {
            type: jobsConstants.SKILL_LIST,
            payload: skills,
        };
    };

    return async (dispatch: any) => {
        dispatch(request());
        const response = await skillService.getSkills();
        dispatch(success(response));
    };
}
