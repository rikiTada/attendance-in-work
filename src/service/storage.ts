import { env } from "@/index";
import { mockData } from "./mockData";

/**
 *	ChromeStrageへの保存
 * @param key
 * @param value
 */
export const setChromeStorage = async (
  key: string,
  newData: [{ type: string; Date: string }]
) => {
  if (env === "development") return console.log(`開発環境`);

  try {
    const existingData = await getChromeStorage(key);
    const isEmpty = !existingData || existingData?.length === 0;

    const updatedData = isEmpty ? [newData] : [...existingData, newData];

    console.log("setChromeStorage:", updatedData);
    await chrome.storage.local.set({ [key]: updatedData });
  } catch (error) {
    console.error(`ノートの保存に失敗しました: ${error}`);
  }
};

/**
 *	ChromeStrageの全件取得
 * @param key
 * @returns Array
 */
export const getChromeStorage = async (key: string) => {
  if (env === "development") return mockData;

  const data = await chrome.storage.local.get([key]);
  console.log("getChromeStorage:", data[key]);
  return data[key];
};

// /**
//  *	ChromeStrageの一件取得
//  * @param key
//  * @returns Array
//  */
// export const getStorageById = async (key: string, id: string) => {
//   if (env === "development")
//     return mockNoteData.filter((note) => note.id === id);

//   const noteData = await getChromeStorage(key);
//   return noteData?.find((note: Note) => note.id === id);
// };

// /**
//  *	ChromeStrageの一件更新
//  */
// // WIP:未検証
// export const updateStorageById = async (
//   key: string,
//   id: string,
//   newNote: string
// ) => {
//   if (env === "development")
//     return mockNoteData.filter((note) => note.id === id);

//   const data = await chrome.storage.local.get([key]);
//   const index = data[key]?.findIndex((note: Note) => note.id === id);

//   if (index === -1)
//     return console.log("ノートの更新に失敗しました: id が見つかりません。");

//   data[key][index] = { ...data[key][index], note: newNote };
//   await chrome.storage.local.set(data);
// };

// /**
//  *	ChromeStrageの一件削除
//  * @param key
//  */
// export const deleteStorageById = async (key: string, id: string) => {
//   if (env === "development") return mockNoteData;

//   try {
//     const noteData = await getChromeStorage(key);
//     const updatedNotes = noteData?.filter((note: Note) => note.id !== id);

//     console.log("deleteStorageById:", updatedNotes);

//     await chrome.storage.local.set({ [key]: updatedNotes });
//   } catch (error) {
//     console.error(`ノートの保存に失敗しました: ${error}`);
//   }
// };

/**
 *	ChromeStrageの全件削除
 * @param key
 * @param value
 */
export const clearChromeStorage = async () => {
  if (env === "development") return console.log("clear:ChromeStorage");

  await chrome.storage.local.clear();
};
