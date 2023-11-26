import DropDownMenu from "../DropDownMenu/DropDownMenu.jsx";

const Menu = () => {
    return (
        <div className='flex flex-col w-80 bg-amber-100'>
            <header className='mx-4 my-4 text-center'>

                <h1 className='text-2xl my-4 '>TO-DO LIST</h1>

                <button
                    className='px-10 py-3 text-sm text-indigo-600 font-semibold rounded-full border border-indigo-200 hover:text-white hover:bg-indigo-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2'>
                    Add new task
                </button>

                <div>
                    <div className='text-start mb-5 mt-7 '>
                        <ul className='text-xl text-gray-600 font-semibold '>

                            <li className='p-4 rounded-lg hover:text-gray-800 hover:bg-indigo-200 hover:border-transparent'>
                                <a href="/today">Today`s Tasks</a></li>

                            <li className='p-4 rounded-lg hover:text-gray-800 hover:bg-indigo-200 hover:border-transparent'>
                                <a href="/all">All Tasks</a></li>

                            <li className='p-4 rounded-lg hover:text-gray-800 hover:bg-indigo-200 hover:border-transparent'>
                                <a href="/important">Important Tasks</a></li>

                            <li className='p-4 rounded-lg hover:text-gray-800 hover:bg-indigo-200 hover:border-transparent'>
                                <a href="/completed">Completed Tasks</a></li>

                            <li className='p-4 rounded-lg hover:text-gray-800 hover:bg-indigo-200 hover:border-transparent'>
                                <a href="/uncompleted">Uncompleted Tasks</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-start '>
                    <DropDownMenu/>
                </div>


            </header>
        </div>
    )
}
export default Menu