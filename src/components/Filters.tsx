import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { skillsActions } from '../actions';
import { locationsActions } from '../actions';
import { filtersActions } from '../actions/filters.actions';

interface IProps {
    skills: string[];
    locations: string[];
    filters: Object[];
    listSkills: Function;
    listLocations: Function;
    selectSkill: Function;
    selectLocation: Function;
}

class Filters extends React.Component<IProps> {
    constructor(props) {
        super(props);

        this.selectLocation = this.selectLocation.bind(this);
        this.selectSkill = this.selectSkill.bind(this);
    }
    componentDidMount() {
        this.props.listSkills();
        this.props.listLocations();
    }

    selectLocation(location) {
        return event => {
            console.log({ location, event });
        };
    }

    selectSkill(skill) {
        return event => {};
    }

    render() {
        const { skills, locations } = this.props;

        return (
            <div>
                <h3>Filters</h3>

                <h4>Location</h4>
                <ul>
                    {locations.map(location => {
                        return (
                            <li
                                onClick={this.selectLocation(location)}
                                key={location}
                            >
                                {location}
                            </li>
                        );
                    })}
                </ul>

                <h4>Skills</h4>
                <ul>
                    {skills.map(skill => {
                        return (
                            <li onClick={this.selectSkill} key={skill}>
                                {skill}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ locations, skills, filters }) {
    return { locations, skills, filters };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            listSkills: skillsActions.list,
            listLocations: locationsActions.list,
            selectSkill: filtersActions.selectSkill,
            selectLocation: filtersActions.selectLocation,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);
