import { useEffect, useState } from "react";
import { NotificationContext } from "../context/NotificationContext ";

export const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const markAllNoticationsAsRead = () => {
    const newNotifications = notifications.map((notification) => {
      return { ...notification, read: true };
    });
    setNotifications(newNotifications);
  };

  const addNewNotification = (notification) => {
    setNotifications((prev) =>  [...prev, notification]);
    const audio = new Audio('/tone.mp3')
    audio.play()
  };

  const stopNotifications = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setInterval(null);
    }
  };

  useEffect(() => {
    const interId = setInterval(() => {
      addNewNotification({
        id: notifications.length,
        message: "You have a new message",
        read: false,
      });
      setCounter((pre) => pre + 1);
    }, 5000);
    setIntervalId(interId)
    return () => clearInterval(interId);
  }, [counter]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        stopNotifications,
        addNewNotification,
        markAllNoticationsAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
