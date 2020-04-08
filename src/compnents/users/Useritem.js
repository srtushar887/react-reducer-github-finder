import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Useritem = ({user : {login, html_url,avatar_url}}) => {
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="img" className="round-img" style={{width : '60px'}}/>
                <h3>{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        );

}

Useritem.propTypes = {
    user: PropTypes.object.isRequired
}

export default Useritem;