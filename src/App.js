import styled from "styled-components";
import Container from "./components/Container";
import { AddData } from './utils/DataProvider';
import { getColor } from "./utils/ThemeProvider";
import Background from './components/Background';
import GlobalStyle from './components/GlobalStyle';
import { ColorType } from "./utils/Constant";

const AppContainer = styled.div`
	position: relative;
	background: ${getColor(ColorType.background)};
`;

function App() {
	AddData();

	return (
		<AppContainer className="App">
			<GlobalStyle />
			<Container />
		</AppContainer>
	);
}

export default App;
