import JobType from '../components/types/JobType';

export const jobService = {
    getJobs,
};

async function getJobs(): Promise<JobType[]> {
    const response = await fetch('http://localhost:4000/jobs');
    return await response.json();
}
