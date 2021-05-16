import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img key={id} src={urls.regular} alt={description} />;
    });

    return (
        <div>
            <h1>{images}</h1>
        </div>
    );
};

export default ImageList;
