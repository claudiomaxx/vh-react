import React from 'react';
import SkillType from './types/SkillType';

interface IProps {
    requirements: SkillType[];
}

export const JobRequirements = (props: IProps) => {
    return (
        <div>
            {props.requirements.map(requirement => {
                return (
                    <span className='ui label' key={requirement.id}>
                        <i className='icon check' />
                        {requirement}
                    </span>
                );
            })}
        </div>
    );
};
