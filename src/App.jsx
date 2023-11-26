import Menu from "./components/Menu/Menu.jsx";
import Content from "./components/Content/Content.jsx";
import RightSection from "./components/RightSection/RightSection.jsx";

function App() {


    return (
        <div className='flex flex-row '>

            <Menu/>
            <Content/>
            <RightSection/>
        </div>
    )
}

export default App
