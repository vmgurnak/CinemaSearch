import toast from 'react-hot-toast';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';

import css from './SearchForm.module.css';
import Button from '../Button/Button.jsx';

const SearchForm = ({ onSetSearchParams, searchQuery }) => {
  const { t } = useTranslation();
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
          placeholder={t('searchPlaceholder')}
        />
        <Button title={t('searchButton')} addClass={css.MoviesPageBtn} />
      </Form>
    </Formik>
  );
};

export default SearchForm;
