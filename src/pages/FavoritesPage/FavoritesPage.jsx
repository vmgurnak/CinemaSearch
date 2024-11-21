import { requestTrendingMovie } from '../../services/api';

import PageComponentFavorites from '../../components/PageComponent/PageComponent.jsx';

const FavoritesPage = () => {
  return (
    <PageComponentFavorites
      requestMovie={requestTrendingMovie}
      titlePage="Favorites movies"
    />
  );
};

export default FavoritesPage;
