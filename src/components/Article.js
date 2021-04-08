import React from "react";


function Article({id, title, date, preview, minutes}) {
    return ( <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
    );
}

export default Article