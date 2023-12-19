import React from 'react'

function ImgCard({ img, onCardClick }) {

    function handleClick() {
        onCardClick(img.urls);
    }

    return (
        <li className="img__card">
            <img className="img__photo" src={img.urls.regular} alt="img" data-type onClick={handleClick} />
        </li>
    );
}

export default ImgCard;