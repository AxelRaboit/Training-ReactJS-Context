import React, { Component } from 'react';
import lisa from '../images/lisa.png';
import ProfileData from './ProfileData';

class Profile extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-warning bg-dark rounded p-2 my-5'>{this.props.info.name}</h1>
                <img src={lisa} alt="lisa image" className='img-thumbnail mb-3' />
                <ProfileData welcome={this.props.info}/>
            </div>
        )
    }
}

export default Profile;
