import styled from "styled-components";
import Container from "./components/Container";
import { AddData } from './utils/DataProvider';
import { ColorType, getColor } from "./utils/ThemeProvider";
import Background from './components/Background';

const AppContainer = styled.div`
	position: relative;
	padding: 40px 0; 
	background: ${getColor(ColorType.background)};
`;

function App() {
	AddData();

	return (
		<AppContainer className="App">
			<Container />
			<Background />
		</AppContainer>
	);
}

export default App;
