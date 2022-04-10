import { Navbar, Preview, Editor } from "./components";

const App = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Editor />
				<Preview />
			</div>
		</div>
	);
};

export default App;
