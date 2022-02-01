import React, { Component } from 'react';
import lisa from '../images/lisa.png';
import ProfileData from './ProfileData';
import MyContext from './MyContext';

class Profile extends Component {
    render() {

        let value = this.context;
        console.log(value);
        
        return (
            <div className='container'>
                <h1 className='text-warning bg-dark rounded p-2 my-5'>{this.props.info.name}</h1>
                <p>Age: {value.age}</p>
                <img src={lisa} alt="lisa image" className='img-thumbnail mb-3' />
                <ProfileData welcome={this.props.info}/>
            </div>
        )
    }
}

Profile.contextType = MyContext;

export default Profile;
