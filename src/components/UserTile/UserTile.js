import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class UserTile extends Component{

    render(){

        const user=this.props.user

        return(
            <Link to={`/user/${user.id}`} className="UserTile">
                {user.img ? <img src={user.img} alt="profile pic"/> :<img src={'https://unsplash.it/300/?random'} alt="profile pic"/>}
                <h1>{user.name}</h1>
                <p>{user.desc}</p>
            </Link>
        )
    }
}

export default UserTile
