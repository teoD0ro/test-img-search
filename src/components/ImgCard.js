import React, { Suspense } from 'react'
const Image = React.lazy(() => import('./ImgFull'));

function ImgCard({ img, onCardClick }) {

    function handleClick() {
        onCardClick(img.urls);
    }

    return (
        <li className="img__card">
            <Suspense fallback={<img className="img__photo" src={img.urls.thumb} alt="img" data-type onClick={onCardClick} />}>
                <Image
                    img={img}
                    onCardClick={handleClick}
                />
            </Suspense>
        </li>
    );
}

export default ImgCard;