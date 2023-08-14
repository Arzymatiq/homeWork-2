import React, { useState } from "react";

const Like = () => {
    const [like, setLike] = useState(false);

    return (
        <button
            style={{ border: "none" }}
            onClick={() => {
                setLike(!like);
            }}>
            {like ? "❤️" : "🤍"}
            <br />
        </button>
    );
};

export default Like;

// /❤️🤍
