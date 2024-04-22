import { formatHora } from './formatarHora.util';

export function checkOut(
  checkOutCount: number,
  currentTime: Date,
  setExitTime: React.Dispatch<
    React.SetStateAction<[null | string, null | string, null | string]>
  >,
  setIsCheckInVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setTimeStop: React.Dispatch<React.SetStateAction<boolean>>,
  setCheckOutCount: React.Dispatch<React.SetStateAction<number>>
) {
  if (checkOutCount < 3) {
    setExitTime((prevExitTime) => {
      const newExitTime = [...prevExitTime];
      newExitTime[checkOutCount] = formatHora(currentTime);
      return newExitTime as [null | string, null | string, null | string];
    });

    setIsCheckInVisible(true);
    setTimeStop(true);
  } else {
    setCheckOutCount(0);
    setExitTime((prevExitTime) => {
      const newExitTime = [...prevExitTime];
      newExitTime[checkOutCount] = formatHora(currentTime);
      return newExitTime as [null | string, null | string, null | string];
    });
    setTimeStop(true);
    setIsCheckInVisible(true);
  }
  setCheckOutCount((prevCount) => prevCount + 1);
}
