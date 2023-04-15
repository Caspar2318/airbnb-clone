import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import FavoriteClient from "./FavoriteClient";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const favorites = await getFavorites();

  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites lists found"
          subtitle="Looks like you have no favorite listings"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoriteClient listings={favorites} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
