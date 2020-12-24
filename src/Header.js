import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WorkIcon from '@material-ui/icons/Work';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOptions from './HeaderOptions';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch('');
    const logoutApp = () => {
       dispatch(logout())
       auth.signOut();
    }
    return (
            <div className="header">
                <div className="header__left">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo" />
                    <div className="header__search">
                        <SearchIcon />
                        <input placeholder="Search" type="text" />
                    </div>
                </div>
                <div className="header__right">
                    <HeaderOptions title="Home" Icon={HomeIcon} />
                    <HeaderOptions title="My network" Icon={SupervisorAccountIcon} />
                    <HeaderOptions title="Messaging" Icon={TextsmsIcon} />
                    <HeaderOptions title="jobs" Icon={WorkIcon} />
                    <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
                    <HeaderOptions 
                    onClick={logoutApp}
                    title="Me" avatar={user} />
                </div>
            </div>
    )
}

export default Header;
