import { useTranslation } from 'react-i18next';

import { requestPopularMovie } from '../../services/api';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';

const PopularMoviesPage = () => {
  const { t } = useTranslation();

  return (
    <PageComponent
      requestMovie={requestPopularMovie}
      titlePage={t('popularMovies')}
    />
  );
};

export default PopularMoviesPage;
