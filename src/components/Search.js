import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import Form from './Form';
import ImgApi from '../utils/ImgApi';
import ImagePopup from './ImgPopup';
import ImgCard from './ImgCard';




function Search({ setImgs, setPage, setFetching, fetching, page, imgs }) {
    const { request } = useParams()
    const [selectedCard, setSelectedCard] = useState({});
    const [total, setTotal] = useState(0);
    const [isEmpty, setIsEmpty] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);
    useEffect(() => {
        if (page < 5 && !isEmpty && document.body.clientHeight - document.documentElement.clientHeight <= 100) {
            imgFetch()
            console.log(document.body.clientHeight - document.documentElement.clientHeight)
        }
    }, [page]);
    useEffect(() => {
        if (fetching) {
            imgFetch()
        }
    }, [fetching]);

    function scrollHandler(e) {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && imgs.length === total) {
            setFetching(true)
        }
    }
    function imgFetch() {
        ImgApi.getMovies(request, page)
            .then((img) => {
                img.total === 0 ? setIsEmpty(true) : setIsEmpty(false);
                setTotal(img.total)
                setImgs([...imgs, ...img.results])
                setPage(page + 1)
                console.log(img)
            })
            .catch((err) => {
                console.error(`Ошибка: ${err}`);
            })
            .finally(() => {
                setFetching(false)
            });
    }

    function closePopup() {
        setSelectedCard({})
    }
    const imgElements = imgs.map(img => {
        return <ImgCard
            img={img}
            onCardClick={setSelectedCard}
        ></ImgCard>
    })

    return (
        <>
            <main className='main'>
                <header className='header-search'>
                    <Form
                        setFetching={setFetching}
                        setImgs={setImgs}
                        setPage={setPage}
                        request={request}
                    ></Form>
                </header>
                <section className='img'>
                    {isEmpty && <h1 className="img__text">К сожалению, поиск не дал результатов</h1>}
                    <ul className='img__cards'>
                        {imgElements}
                    </ul>
                </section>
            </main >
            <ImagePopup card={selectedCard} onClose={closePopup} />
        </>
    );
}

export default Search;