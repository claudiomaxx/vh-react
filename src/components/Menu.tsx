import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IReducerState } from '../reducers';
import JobType from './types/JobType';

interface IProps {
    jobs: IReducerState<JobType[]>;
}

class Menu extends React.Component<IProps> {
    render() {
        const { jobs } = this.props;

        return (
            <nav className='ui blue secondary pointing menu'>
                <div className='center menu'>
                    <Link to='/jobs' className='item active'>
                        JOBS{' '}
                        <span className='ui label blue'>
                            {jobs.value.length}
                        </span>
                    </Link>
                    <Link to='/events' className='item'>
                        EVENTS <span className='ui label'>4</span>
                    </Link>
                    <Link to='/profile' className='item'>
                        PROFILE
                    </Link>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ jobs }: { jobs: IReducerState<JobType[]> }) {
    return { jobs };
}

export default connect(mapStateToProps)(Menu);
