import { Route, Routes } from "react-router-dom";
import WaitList from '../pages/WaitList';


const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<WaitList />} />
    </Routes>
  )
}

export default AppRouter