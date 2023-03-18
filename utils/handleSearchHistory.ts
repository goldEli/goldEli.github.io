const key = "searchHistory";
export const getHistory = () => {
  const local = localStorage.getItem(key) ?? "[]";

  return JSON.parse(local);
};

export const clearHistory = () => {
  localStorage.setItem(key, JSON.stringify([]));
};
export const setHistory = (str: string) => {
  const history = getHistory();
  history.unshift(str);
  const unique = [...new Set(history)];
  const newHistory = unique.slice(0, 10);

  localStorage.setItem(key, JSON.stringify(newHistory));
};
