export const historyPush = (
  url: string,
  e: { preventDefault: () => void },
  navigate: any
) => {
  e.preventDefault();
  navigate(url);
};
