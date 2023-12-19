import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import icon from '../images/serach.svg';

function Form({ setFetching, setImgs, setPage, request }) {
    const [isRequest, setIsRequest] = useState(false);
    useEffect(() => {
        if (request) {
            setValue('img', request);
            setIsRequest(true)
        }
    }, []);

    const navigate = useNavigate();
    const {
        setValue,
        register,
        formState: {
            errors, isDirty
        },
        handleSubmit,
        resetField,

    } = useForm({
        defaultValues: { img: '' }
    })

    function onSubmit({ img }) {
        setFetching(true)
        setImgs([])
        setPage(1)
        navigate(`/search/${img}`, { replace: true });
    }

    return (
        <form className='form' action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
            <label className='form__search'>
                <img className="form__logo" src={icon} alt="Поиск" data-type />
                <input className="form__input" type="text" placeholder="Телефоны, яблоки, груши..." id="img" name="img" {...register('img', {
                    required: "Введите запрос."
                })} />
                {(isRequest || isDirty) && <button className="form__clear-btn" type="button" onClick={() => resetField("img")} />}
            </label>
            <label className="form__sbm">
                <button className="form__sbm-btn" type="submit">Искать</button>
            </label>
            <span className="form__err">
                {errors?.img && (errors?.img?.message || "Ошибка")}
            </span>

        </form>
    );
}

export default Form;