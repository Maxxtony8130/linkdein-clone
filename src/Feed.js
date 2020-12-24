import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import EventIcon from '@material-ui/icons/Event';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Feed() {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) =>
            ({
                id: doc.id,
                data: doc.data(),
            }))
            )
        );
    }, []);
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photourl || " ",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={PhotoSizeSelectActualIcon} color="#2E8BC0" />
                    <InputOption title="Video" Icon={YouTubeIcon} color="orange" />
                    <InputOption title="Event" Icon={EventIcon} color="lightgrey" />
                    <InputOption title="Write article" Icon={ArtTrackIcon} color="lightpink" />
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                        return (
                            <Post
                                key={id}
                                name={name}
                                description={description}
                                message={message}
                                photoUrl={photoUrl}
                            />
                        )
                    })
                }
            </FlipMove>
        </div>
    );
};

export default Feed
