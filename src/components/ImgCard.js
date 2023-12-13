import React, { useState, useEffect } from 'react'

function ImgCard({ img, onCardClick }) {

    function handleClick() {
        onCardClick(img.urls);
    }

    return (
        <li className="img__card">
            <img className="img__photo" src={img.urls.thumb} alt="img" data-type onClick={handleClick} />
        </li>
    );
}

export default ImgCard;