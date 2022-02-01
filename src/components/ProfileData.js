import React from 'react';
import ContentData from './ContentData';

const ProfileData = (props) => {

    return (
        <div>
            <h2 className='text-warning bg-dark rounded p-2 my-5'>Informations about {props.welcome.name}</h2>
            <ContentData />
        </div>
    )
}

export default ProfileData;