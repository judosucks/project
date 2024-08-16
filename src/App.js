import CarValue from "./component/CarValue"
import CarList from "./component/CarList"
import CarSearch from "./component/CarSearch"
import CarForm from "./component/CarForm"
function App() {
    return (
        <div className="container is-fluid">
            <CarForm/>

            <CarSearch/>
            <CarList/>
            <CarValue/>

        </div>
    )
}
export default App