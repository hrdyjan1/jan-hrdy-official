const localStorageType = {
  THEME: 'THEME',
  LANGUAGE: 'LANGUAGE',
  SOUND: 'SOUND',
};

const getItems = (items) => {
  if (Array.isArray(items)) {
    return items.reduce(
      (result, item) => ({
        ...result,
        [item]: localStorage.getItem(item),
      }),
      {}
    );
  } else if (typeof items === 'string') {
    return { [items]: localStorage.getItem(items) };
  }
  return {};
};

const enhanceLocalStorage = (itemName, itemValue) => {
  localStorage.setItem(itemName, itemValue);
};

export { getItems, enhanceLocalStorage, localStorageType };
