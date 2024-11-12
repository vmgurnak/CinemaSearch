import { requestTrendingMovie } from '../../services/api';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';

const TrendingPage = () => {
  return (
    <PageComponent
      requestMovie={requestTrendingMovie}
      titlePage="Trending today"
    />
  );
};

export default TrendingPage;
