// DropdownMenu.js

// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left ">

            <button
                onClick={toggleMenu}
                type="button"
                className="text-black inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-indigo-200 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
            >
                Directories
            </button>

            {isOpen && (
                <div
                    className="origin-top-right absolute left-3 right-0 mt-2 w-30 rounded-md shadow-lg bg-indigo-200 ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1 mx-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <a
                            href="/main"
                            className="block px-2 py-2 text-sm text-gray-700 hover:bg-indigo-200"
                            role="menuitem"
                        >
                            Main
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
