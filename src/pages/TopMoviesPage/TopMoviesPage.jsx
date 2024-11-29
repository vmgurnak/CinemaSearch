import { useTranslation } from 'react-i18next';

import { requestTopMovie } from '../../services/api';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';

const TopMoviesPage = () => {
  const { t } = useTranslation();

  return (
    <PageComponent requestMovie={requestTopMovie} titlePage={t('topMovies')} />
  );
};

export default TopMoviesPage;
