import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import{
	Login,
	ClientLogin,
	Register,
	RegClient,
	ClientDash,
	ClientUpdate,
	ClientMore,

	
	

} from "../pages"

function App() {
	return (
		<>
			<Router>
				<NavBar /> 

				<Routes>

				{/* Login Selection */}
				 <Route path="/login" element={<Login />} />
				 <Route path="/login/clientlogin" element={<ClientLogin />} />
				 
				 {/* Register Selection */}
				 <Route path="/register" element={<Register/>} />
				 <Route path="/register/clientregister" element={<RegClient/>} />

				 {/* Client Dashboard */}
				 <Route path="/clientdash" element={<ClientDash />} />
				 <Route path="/clientdash/clientupdate/:id" element={<ClientUpdate/>}/>
				 <Route path="/clientdash/clientmore/:id" element={<ClientMore/>}/>
				 

				 

				</Routes>

				<Footer /> 

			</Router>
		</>
	);
}

export default App;
