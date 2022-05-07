import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ResultInterface } from "../types";

const ResultCard = ({ result }: { result: ResultInterface }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {result.id}
        </Typography>
        <Typography variant="h5" component="div">
          {result.word}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          href={`https://www.google.com/search?q=${result.word}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const Result = ({ results }: { results: ResultInterface[] }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {results.map((result: ResultInterface) => (
        <Grid item xs={12} md={4} key={result.id}>
          <ResultCard result={result} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Result;
