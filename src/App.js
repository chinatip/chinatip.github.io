import styled from "styled-components";
import Container from "./components/Container";
import { AddData } from './utils/DataProvider';
import { ColorType, getColor } from "./utils/ThemeProvider";

const AppContainer = styled.div`
	background: ${getColor(ColorType.background)};
`;

function App() {
	AddData();

	return (
		<AppContainer className="App">
			<Container />
		</AppContainer>
	);
}

export default App;
