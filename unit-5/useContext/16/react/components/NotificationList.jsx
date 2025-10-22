import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext ";

export const NotificationList = () => {
  const { notifications, markAllNoticationsAsRead, stopNotifications } =
    useContext(NotificationContext);

  return (
    <>
      <button onClick={markAllNoticationsAsRead}>Mark All as read</button>
      <button onClick={stopNotifications}>Stop notifications</button>
      <button >Enable Notifications Sound 🔔</button>

      {notifications.map((Notification) => {
        return (
          <h1 style={{ color: Notification.read ? "green" : "#726f6fff" }}>
            {Notification.message}
          </h1>
        );
      })}
    </>
  );
};
