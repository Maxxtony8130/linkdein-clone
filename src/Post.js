import { Avatar } from '@material-ui/core';
import React , { forwardRef } from 'react'
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareIcon from '@material-ui/icons/Share';
import './Post.css';
const Post = forwardRef(({ name, description , message , photoUrl} , ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>
                    {name[0]}
                </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__button">
                <InputOption Icon={ThumbUpOutlinedIcon}  title="Like" color="gray"/>
                <InputOption Icon={MessageOutlinedIcon}  title="Comment" color="gray"/>
                <InputOption Icon={ShareIcon}            title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon}     title="Send" color="gray"/>
            </div>
        </div>
    )
})

export default Post
