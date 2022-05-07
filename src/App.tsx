import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
    createTheme, responsiveFontSizes, ThemeProvider
} from "@mui/material/styles";
import { useState } from "react";
import { getResults } from "./api/model";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import Search from "./components/Search";
import { ResultInterface, SearchInterface } from "./types";

let theme = createTheme();

theme = responsiveFontSizes(theme);

function App() {
  const [results, setResults] = useState<ResultInterface[]>([]);

  const handleSearch = async (search: SearchInterface) => {
    const res = await getResults(search);
    setResults(res);
  };
  console.log(results);
  

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#eff6ff",
            py: 8,
          }}
        >
          <Container>
            <Grid container direction="column" spacing={8}>
              <Grid item>
                <Header />
              </Grid>
              <Grid item>
                <Search handleSearch={handleSearch} />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container
          sx={{
            py: 8,
          }}
        >
          <Result results={results} />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
