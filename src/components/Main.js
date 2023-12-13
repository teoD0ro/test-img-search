import Form from './Form';

function Main({ setImgs, setPage, setFetching }) {

    return (
        <main className='main'>
            <section className='main-search'>
                <Form
                    setFetching={setFetching}
                    setImgs={setImgs}
                    setPage={setPage}
                ></Form>
            </section>
        </main>
    );
}

export default Main;