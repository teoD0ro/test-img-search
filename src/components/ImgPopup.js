import React from 'react'

function ImagePopup({ card, onClose }) {

    return (
        <div id="image_popup" className={`popup popup_with-image ${card.full ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__container_content_image">
                <img className="popup__image" src={card.full} alt={''} data-type />
            </div>
            <button className="popup__close-button" type="button" onClick={onClose} />
        </div>
    );
}

export default ImagePopup;