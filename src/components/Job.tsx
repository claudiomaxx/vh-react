import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { JobRequirements } from './JobRequirements';
import JobType from './types/JobType';
import { jobsActions } from '../actions';

import moment from 'moment';

interface IProps {
    job: JobType;
    selected?: boolean;
    applied?: boolean;
    select: Function;
    apply: Function;
    cancelApplication: Function;
}

class Job extends React.Component<IProps> {
    apply(job: JobType) {
        if (this.props.applied) {
            this.props.cancelApplication(job.id);
        } else {
            this.props.apply(job.id);
        }
    }

    detail(job: JobType) {
        this.props.select(this.props.selected ? '' : job.id);
    }

    renderSummary() {
        return (
            <React.Fragment>
                <div className='content'>{this.props.job.summary}</div>
            </React.Fragment>
        );
    }

    renderDescription() {
        return (
            <React.Fragment>
                <div className='content'>
                    <h4 className='ui sub header'>DESCRIPTION</h4>
                    The Ideal Candidate: <br />
                    <br />
                    - Has 5+ years of experience in building end-to-end web
                    applications using Javascript/Angular.
                    <br />
                    - Is familiar and knowledgeable / has experience with
                    software design and development lifecycle, especially for
                    web-based platforms (can handle: requirements gathering,
                    implementation, optimization and testing etc.)
                    <br />
                    - Works well in an Agile environment
                    <br />
                    - Has good communication skills (note: English language
                    level must be advanced or fluent)
                    <br />
                    - Has a university degree in Computer Science or a related
                    field/or 5+ years of software engineering experience.
                    <br />
                    - Prior leadership or coaching and mentoring experience will
                    be a stong asset! Nice to have Skills:
                    <br />
                    - Working experience with Python/Flask - Fmiliarity with
                    WebRTC protocol / service.
                    <br />- Prior experience developing online learning or web
                    conferencing platforms
                </div>

                <div className='content'>
                    <div className='left floated'>
                        <h4 className='ui sub header'>JOB TYPE</h4>
                        Permanent
                    </div>
                    <div className='right floated star'>
                        <h4 className='ui sub header'>SALARY</h4>
                        Not Informed
                    </div>
                </div>
            </React.Fragment>
        );
    }

    render() {
        const { job, selected, applied } = this.props;

        return (
            <div className={`ui fluid card ${selected ? 'blue' : ''}`}>
                <div className='content'>
                    <div className='header'>
                        {job.title.toUpperCase()}
                        <span className='right floated'>
                            <span className='ui label green'>NEW</span>
                        </span>
                    </div>
                    <div className='meta'>
                        {job.locationId} - About{' '}
                        {moment().from(job.created, true)} ago
                    </div>
                </div>

                {selected ? this.renderDescription() : this.renderSummary()}

                <div className='content'>
                    <h3 className='ui sub header'>MUST HAVE SKILLS</h3>
                    <JobRequirements requirements={job.requirementsId} />
                </div>

                {selected && (
                    <div className='content'>
                        <h3 className='ui sub header'>NICE TO HAVE SKILLS</h3>
                        <JobRequirements requirements={job.plusId} />
                    </div>
                )}

                <div className='extra content'>
                    <div className='ui two buttons'>
                        <button
                            className='ui basic grey button'
                            onClick={e => this.detail(job)}
                        >
                            {selected ? 'LESS' : 'MORE'} DETAILS
                        </button>
                        <button
                            className={`ui primary button ${
                                applied ? 'basic' : ''
                            }`}
                            onClick={e => this.apply(job)}
                        >
                            {applied ? 'CANCEL APPLICATION' : 'APPLY'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            select: jobsActions.select,
            apply: jobsActions.apply,
            cancelApplication: jobsActions.cancelApplication,
        },
        dispatch
    );
}

export default connect(
    null,
    mapDispatchToProps
)(Job);
