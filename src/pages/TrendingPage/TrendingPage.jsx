import { useTranslation } from 'react-i18next';

import DocumentTitle from '../../components/REUSABLE/DocumentTitle.jsx';
import PageComponent from '../../components/PageComponent/PageComponent.jsx';

import { requestTrendingMovie } from '../../services/api';

const TrendingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <DocumentTitle>Movies - Trending</DocumentTitle>
      <PageComponent
        requestMovie={requestTrendingMovie}
        titlePage={t('trendingToday')}
      />
    </>
  );
};

export default TrendingPage;
