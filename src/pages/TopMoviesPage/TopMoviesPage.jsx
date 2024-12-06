import { useTranslation } from 'react-i18next';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';
import DocumentTitle from '../../components/REUSABLE/DocumentTitle.jsx';

import { requestTopMovie } from '../../services/api';

const TopMoviesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <DocumentTitle>Movies - Top</DocumentTitle>
      <PageComponent
        requestMovie={requestTopMovie}
        titlePage={t('topMovies')}
      />
    </>
  );
};

export default TopMoviesPage;
