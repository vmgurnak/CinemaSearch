import { useTranslation } from 'react-i18next';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';
import DocumentTitle from '../../components/REUSABLE/DocumentTitle.jsx';

import { requestUpcomingMovie } from '../../services/api';

const UpcomingMoviesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <DocumentTitle>Movies - Upcoming</DocumentTitle>
      <PageComponent
        requestMovie={requestUpcomingMovie}
        titlePage={t('upcomingMovies')}
      />
    </>
  );
};

export default UpcomingMoviesPage;
