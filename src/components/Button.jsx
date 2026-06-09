import React from "react";
import { useState } from "react";

function Button({count, onclick}) {

    return (
        <>
            <button className="mybtn" onClick={onclick}>
                clicked {count} times
            </button>
        </>
    )
}

export default Button