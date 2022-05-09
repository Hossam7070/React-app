import 'bootstrap/dist/css/bootstrap.css';
import UserModule from './Modules/UserModule' 
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";


function App() {
  return (
		<Suspense fallback={<div>Loading.................</div>}>
			<div className="App">
				<BrowserRouter>
					<Navbar />
          
					<Routes>
						<Route path="/*" element={<UserModule />} />
						<Route path="*" element={<div>404 - NotFound</div>} />
					</Routes>
				</BrowserRouter>
			</div>
		</Suspense>
	);
}

export default App;
