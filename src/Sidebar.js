import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
        <span className="sidebar__hash">#
        </span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C5616AQF7G_XCZi6qXQ/profile-displaybackgroundimage-shrink_200_800/0/1608400671209?e=1614211200&v=beta&t=jxxIAt9BJc08P189aYqsPUvv2pH8RiILD8Ihc8kA9SU" alt="logo" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" fontSize="small">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className="sidebar__statNumber">84</p>
                </div>
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">35</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("editor pick")}
                {recentItem("economy")}
                {recentItem("market")}
                {recentItem("economics")}
                {recentItem("macroeconomics")}
                <br/>
                <p style={{color:"blue",marginLeft:"10px"}}>Groups</p>
                <p style={{color:"blue",marginLeft:"10px"}}>Events</p>
                <p style={{color:"blue",marginLeft:"10px"}}>Followed Hashtags</p>
                {recentItem("editorpicks")}
                {recentItem("economy")}
                {recentItem("market")}
                <p style={{marginLeft:"28px",color:"grey",fontWeight:"bold",}}>Show more </p>

            </div>
        </div>
    )
}

export default Sidebar
