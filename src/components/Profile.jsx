import React, { use } from "react";

const user = {
    name : 'Hedy Lamarr',
    imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
    imageSize : 90
}

function Profile() {
    return (
        <>
            <div>
                <h1>{user.name}</h1>
                <img 
                className="avatar"
                src={user.imageUrl}
                alt={'photo of ' + user.name}
                style={
                    {
                        width : user.imageSize,
                        height : user.imageSize
                    }
                }
                />
            </div>
        </>
    )
}


export default Profile