import React, { Dispatch } from 'react';

import { connect } from 'react-redux';

import Job from './Job';
import JobType from './types/JobType';
import { bindActionCreators } from 'redux';
import { jobsActions } from '../actions';
import { IReducerState } from '../reducers';
import { selectedJob } from '../reducers/select-job.reducer';
import { jobsApplied } from '../reducers/jobs-applied.reducer';

interface IProps {
    jobs: IReducerState<JobType[]>;
    selectedJob: string;
    jobsApplied: IReducerState<string[]>;
    // appliedJobs: IReducerState<JobType[]>;
    list: Function;
    select: Function;
}

class JobList extends React.Component<IProps> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.fetchJobs();
    }

    fetchJobs() {
        this.props.list();
    }

    render() {
        const { jobs, jobsApplied, selectedJob } = this.props;

        return (
            <div>
                {jobs.loading ? 'Loading...' : ''}

                {jobs.value.map((job: JobType, idx: number) => {
                    let applied =
                        jobsApplied.value.filter(j => j === job.id).length ===
                        1;

                    return (
                        <Job
                            job={job}
                            key={job.title + idx}
                            selected={job.id === selectedJob}
                            applied={applied}
                        />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps({
    jobs,
    jobsApplied,
    selectedJob,
}: {
    jobs: IReducerState<JobType[]>;
    jobsApplied: IReducerState<string[]>;
    selectedJob: string;
}) {
    return { jobs, jobsApplied, selectedJob };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            list: jobsActions.list,
            select: jobsActions.select,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobList);
