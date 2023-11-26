
const Menu = () => {
    return (
        <div className='flex flex-col w-64' >
            <header className='mx-4 my-4'>

                <h1>TO-DO LIST</h1>

                <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
                    Add new task
                </button>

                <div >
                    <div className=''>
                        <ul>
                            <li> <a href="/today">Today`s Tasks</a> </li>

                            <li> <a href="/all">All Tasks</a> </li>

                            <li> <a href="/important">Important Tasks</a> </li>

                            <li> <a href="/completed">Completed Tasks</a> </li>

                            <li> <a href="/uncompleted">Uncompleted Tasks</a> </li>
                        </ul>
                    </div>
                </div>

                <div className=''>
                    <button>Directions</button>
                    <div>

                    </div>
                </div>


            </header>
        </div>
    )
}
export default Menu