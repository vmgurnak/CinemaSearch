import { useTranslation } from 'react-i18next';
import PageComponentFavorites from '../../components/PageComponentFavorites/PageComponentFavorites';
import DocumentTitle from '../../components/REUSABLE/DocumentTitle.jsx';

const FavoritesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <DocumentTitle>Movies - Favorites</DocumentTitle>;
      <PageComponentFavorites titlePage={t('favoritesMovies')} />;
    </>
  );
};

export default FavoritesPage;
