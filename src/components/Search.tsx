import { LinearProgress } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import * as yup from "yup";
import { SearchInterface } from "../types";

const searchSchema = yup.object({
  query: yup.string().defined(),
});

interface FuncProps {
  handleSearch: (search: SearchInterface) => Promise<void>;
}

const Search = ({ handleSearch }: FuncProps) => {
  const initialValues: SearchInterface = { query: "" };

  const onSubmit = async (
    search: SearchInterface,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    await handleSearch(search);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={searchSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="query"
            type="query"
            label="Query"
            fullWidth
            variant="filled"
            sx={{
              borderRadius: '50px'
            }}
          />
          {isSubmitting && <LinearProgress />}
          {/*
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
*/}
        </Form>
      )}
    </Formik>
  );
};

export default Search;
