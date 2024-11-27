type LocalStorageItems = { [key: string]: string | null };

// Enum to ensure consistency with localStorage keys
export const LocalStorageKeys = {
  THEME: 'THEME',
  LANGUAGE: 'LANGUAGE',
  SOUND: 'SOUND',
} as const;

// Function to get items from localStorage
const getItems = (items: (keyof typeof LocalStorageKeys)[]): LocalStorageItems => {
  return items.reduce((result, item) => {
    result[item] = localStorage.getItem(item);
    return result;
  }, {} as LocalStorageItems);
};

// Function to set an item in localStorage
const setItem = (itemName: string, itemValue: string): void => {
  localStorage.setItem(itemName, itemValue);
};

const Storage = {
  setItem,
  getItems,
  key: LocalStorageKeys,
};


export { Storage };
