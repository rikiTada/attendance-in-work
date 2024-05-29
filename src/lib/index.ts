// 日付の0埋め
export const zeroPadding = (dateWithTime: string) => {
  const [date, time] = dateWithTime.split(" ");

  let [year, month, day] = date.split("/");
  let [hour, minute, second] = time.split(":");

  [month, day, hour, minute, second] = [month, day, hour, minute, second].map(
    (str) => str.padStart(2, "0")
  );

  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
};

// 出退勤によって色を変える
export const changeColor = (type: string) => {
  switch (type) {
    case "出勤":
      return "green";
    case "退勤":
      return "red";
    case "休憩開始":
      return "blue";
    case "休憩終了":
      return "blue";
    default:
      return "";
  }
};
