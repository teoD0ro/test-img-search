import React from 'react'

function ImgFull({ img, onCardClick }) {

    return (
        <img className="img__photo" src={img.urls.regular} alt="img" data-type onClick={onCardClick} />
    );
}

export default ImgFull;