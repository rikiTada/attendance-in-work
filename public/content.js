const url = window.location.href;
const mfURL = "https://attendance.moneyforward.com/my_page";
const selectedData = [
  { type: "出勤", location: "clock_in" },
  { type: "休憩開始", location: "break" },
  { type: "休憩終了", location: "returned" },
  { type: "退勤", location: "clock_out" },
];

window.onload = () => {
  if (!url.includes(mfURL)) return;

  console.group("拡張機能を実行します");

  const buttons = document.querySelectorAll(".time-stamp-button");

  const hashId = url.split("#")[1];

  const selectedIndex = selectedData.findIndex(
    (index) => index.location === hashId
  );

  if (selectedIndex !== -1) {
    buttons[selectedIndex].click();

    setTimeout(() => {
      window.close();
      alert(`${selectedData[selectedIndex].type}しました`);
    }, 500);
  } else {
    console.log(`ハッシュタグ "${hashId}" に対応するデータが見つかりません。`);
  }
  console.groupEnd();
};
