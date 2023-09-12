import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "../styles/global-styles";
import {AppRoutes} from "./routes";

export function App() {
	return (
		<>
			<BrowserRouter>
				<AppRoutes/>
			</BrowserRouter>
			<GlobalStyle/>
		</>
	);
}
