interface INotification {
  message: string;
}

const Notification = ({ message = "" }: INotification) => {
  return <p>{message}</p>;
};

export default Notification;
