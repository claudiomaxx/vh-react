import React from 'react';

interface IProps {
    requirements: string[];
}

export const JobRequirements = (props: IProps) => {
    return (
        <div>
            {props.requirements.map((requirement, idx) => {
                return (
                    <span className='ui label' key={requirement + idx}>
                        <i className='icon check' />
                        {requirement}
                    </span>
                );
            })}
        </div>
    );
};
