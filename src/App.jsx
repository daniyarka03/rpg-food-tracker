import './App.css'
import SurvivalHabitTracker from "./pages/SurvivalHabitTracker.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateNewProduct from "./pages/CreateNewProduct.jsx";

function App() {

    const initDB = () => {
        try {
            const characterParams = JSON.parse(localStorage.getItem('characterParams'));
            if (characterParams === null) {
                localStorage.setItem('characterParams', JSON.stringify({
                    hp: 100,
                    water: 100
                }));
                console.log("Successfully created characterParams")
            }
        } catch (e) {
            console.log(e);
        }
    }

    initDB();

  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<SurvivalHabitTracker />} exact={ true} />
              <Route path="/create-new-product" element={<CreateNewProduct />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
