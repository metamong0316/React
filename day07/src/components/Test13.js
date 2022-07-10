import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test13 = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [num, setNum] = useState(1)

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios.get(url)
            .then(res => setPost(res.data))
    }, [num])

    const onNum = () => {
        setNum(id)
    }
    return (
        <div>
            <p><input type="text" value={id} onChange={e => setId(e.target.value)} /></p>
            <button onClick={onNum}>검색</button>
            <h3>
                {post.id} / {post.title}
            </h3>
        </div>
    );
};

export default Test13;