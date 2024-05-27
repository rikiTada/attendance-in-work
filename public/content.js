/**
 *	ChromeStrageの全件取得
 * @param key
 * @returns Array
 */
const getChromeStorage = async (key) => {
  const data = await chrome.storage.local.get([key]);
  return data[key];
};

/**
 *	ChromeStrageへの保存
 * @param key
 * @param value
 */
const setChromeStorage = async (key, newData) => {
  try {
    const existingData = await getChromeStorage(key);
    const isEmpty = !existingData || existingData?.length === 0;

    const updatedData = isEmpty ? [newData] : [...existingData, newData];

    await chrome.storage.local.set({ [key]: updatedData });
  } catch (error) {
    console.error(`保存に失敗しました: ${error}`);
  }
};

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

  const buttons = document.querySelectorAll(".time-stamp-button");

  const hashId = url.split("#")[1];

  const selectedIndex = selectedData.findIndex(
    (index) => index.location === hashId
  );

  if (selectedIndex !== -1) {
    const res = confirm(`${selectedData[selectedIndex].type}しますか?`);

    if (res) {
      buttons[selectedIndex].click();

      setChromeStorage("attendance", {
        type: selectedData[selectedIndex].type,
        Date: new Date().toLocaleString(),
      });

      setTimeout(() => {
        window.close();
        alert(`${selectedData[selectedIndex].type}しました`);
      }, 500);
    } else {
      alert(`キャンセルしました。ウィンドウを閉じます。`);
      window.close();
    }
  }
};
