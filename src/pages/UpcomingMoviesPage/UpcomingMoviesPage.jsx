import { useTranslation } from 'react-i18next';

import { requestUpcomingMovie } from '../../services/api';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';

const UpcomingMoviesPage = () => {
  const { t } = useTranslation();
  return (
    <PageComponent
      requestMovie={requestUpcomingMovie}
      titlePage={t('upcomingMovies')}
    />
  );
};

export default UpcomingMoviesPage;
