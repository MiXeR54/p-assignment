export const getIdx = (
  key: string,
  value: number | null,
  array: Array<any>
): number | undefined => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
};
