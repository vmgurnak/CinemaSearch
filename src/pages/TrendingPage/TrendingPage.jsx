import { useTranslation } from 'react-i18next';

import { requestTrendingMovie } from '../../services/api';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';

const TrendingPage = () => {
  const { t } = useTranslation();

  return (
    <PageComponent
      requestMovie={requestTrendingMovie}
      titlePage={t('trendingToday')}
    />
  );
};

export default TrendingPage;
