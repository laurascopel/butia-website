import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/servicos" element={<Services />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
