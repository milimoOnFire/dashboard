import { purple, pink, teal } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Todos } from "./features/todos/Todos";
import DashboardBuilder from "./containers/DashboardBuilder";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      light: teal[500],
      main: pink[500],
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashboardBuilder />
    </ThemeProvider>
  );
}

export default App;
