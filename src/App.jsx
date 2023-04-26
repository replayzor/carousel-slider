import Carousel from "./components/Carousel";
import { ToastContainer, toast } from "react-toastify";

function App() {
	return (
		<main>
			<Carousel />
			<ToastContainer toast={toast} />
		</main>
	);
}

export default App;
