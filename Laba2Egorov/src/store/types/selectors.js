export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('types/fetchItems');
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters['types/items']
}

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('types/removeItem', id);
}

export const addItem = (store, { popularity, holiday, date, category }) => {
  const { dispatch } = store;
  dispatch('types/addItem', { popularity, holiday, date, category });
}

export const updateItem = (store, { id, popularity, holiday, date, category }) => {
  const { dispatch } = store;
  dispatch('types/updateItem', { id, popularity, holiday, date, category });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['types/itemsByKey'][id] || {};
}
