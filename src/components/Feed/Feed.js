import React from 'react';
import './Feed.scss'

var arr = [
    {name: "Trevor", post: "Post post post post. Post.", img: "https://img.icons8.com/wired/64/000000/cupcake.png"},
    {name: "Daniel", post: "Post post post post!", img: "https://img.icons8.com/dusk/64/000000/cupcake.png"},
    {name: "Rachel", post: "Post post post post...", img: "https://img.icons8.com/wired/64/000000/cupcake.png"},
    {name: "Antonio", post: "Post post post post post?", img: "https://img.icons8.com/dusk/64/000000/cupcake.png"}
];

const Feed = () => {
    return(
        <section id="feed">
            {arr.map((e, i) => {
                return (
                <div className="post" key={i}>
                    <h1>{e.name}</h1>
                    <p>{e.post}</p>
                    <img alt="like icon" src={e.img}/>
                </div>
                )
            })}
        </section>
    )
}

export default Feed;