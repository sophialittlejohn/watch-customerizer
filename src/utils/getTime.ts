export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

export const getTime = (): Time => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return { hours, minutes, seconds };
};
