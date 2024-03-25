
import { Route, Routes } from "react-router-dom"
import TransactionsHome from "./Pages/TransactionsHome"
import DefaultLayout from "./layouts/DefaultLayout"


function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<TransactionsHome />}></Route>
      </Route>
    </Routes>
  )
}

export default Router