// import toast library for notification when the form is empty
import toast from 'react-hot-toast';

// import library Formik
import { Formik, Form, Field } from 'formik';

import css from './SearchForm.module.css';
import Button from '../Button/Button.jsx';

const SearchForm = ({ onSetSearchParams, searchQuery }) => {
  const initialValues = { query: searchQuery ?? '' };
  // const initialValues = { query: '' };

  const handlerSubmit = (values) => {
    if (!values.query.trim()) {
      toast('Please enter your request.');
      return;
    }
    onSetSearchParams(values.query);
    values.query = '';
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
      <Form className={css.MoviesPageForm} autoComplete="off">
        <Field
          className={css.MoviesPageInput}
          name="query"
          type="text"
          placeholder="Search movies"
        />
        <Button title="Search" addClass={css.MoviesPageBtn} />
      </Form>
    </Formik>
  );
};

export default SearchForm;
