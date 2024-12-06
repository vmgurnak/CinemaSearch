import { useTranslation } from 'react-i18next';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';
import DocumentTitle from '../../components/REUSABLE/DocumentTitle.jsx';

import { requestPopularMovie } from '../../services/api';

const PopularMoviesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <DocumentTitle>Movies - Popular</DocumentTitle>
      <PageComponent
        requestMovie={requestPopularMovie}
        titlePage={t('popularMovies')}
      />
    </>
  );
};

export default PopularMoviesPage;
