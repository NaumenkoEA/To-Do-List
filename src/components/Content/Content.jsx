import LiveDate from "../LiveDate/LiveDate.jsx";

const Content = () => {

    return (
        <main className='w-full bg-indigo-100'>
            <header className='m-5 flex justify-between items-center'>

                <form className='p-5 space-x-1 flex items-center' action="">

                    <input className='m-2 h-10 w-96 rounded-lg' type="search" placeholder='  Search task'/>

                    <button className='w-7  ' type='submit'>
                        <img src="/search.svg" alt=""/>
                    </button>

                </form>

                <div className=''>
                    <LiveDate/>
                </div>

            </header>

            <section className='mx-12 text-xl flex items-center justify-between'>

                <h1 className='py-3 '>
                    Today`s Tasks
                </h1>

                <div className='mr-5'>
                    Filters
                </div>

            </section>
        </main>
    )
}

export default Content