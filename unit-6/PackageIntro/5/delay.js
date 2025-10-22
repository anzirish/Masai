import { setTimeout } from "timers";

export const delayMessage = (msg, delayTime) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, delayTime);
  });
};
