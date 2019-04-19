// export * from './job.service';
// export * from './skill.service';
// export * from './location.service';

import api from './api';
import JobType from '../components/types/JobType';
import ApplicationType from '../components/types/ApplicationType';

export default {
    getJobs: async () => {
        const response = await api.get('/jobs');
        return response;
    },

    addJob: async (job: JobType) => {
        const response = await api.post('/jobs', job.toJSON());
        console.log('addJob', response);
        return response;
    },

    addApplication: async (application: ApplicationType) => {
        const response = await api.post('/applications', application.toJSON());
        console.log('addJob', response);
        return response;
    },
};
