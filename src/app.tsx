import { storageName } from "./index";
import { Button, LinkButton, Title } from "./components";
import { getChromeStorage } from "@/service/storage";
import { useMemo, useState } from "preact/hooks";
import { Storage as StorageType } from "@/types/storageType";
import { Details } from "./components/Details";
import { clearChromeStorage } from "./service/storage";

export const App = () => {
  const url = "https://attendance.moneyforward.com/my_page";

  const createTab = (hash: string) => {
    const createdURL = `${url}${hash}`;
    chrome.tabs.create({ url: createdURL });
  };

  const buttons = [
    { title: "出勤", location: "clock_in" },
    { title: "休憩開始", location: "break" },
    { title: "休憩終了", location: "returned" },
    { title: "退勤", location: "clock_out" },
  ];

  const [storage, setStorage] = useState<StorageType>([]);

  console.log("app.tsx:", storage);

  const clearStorage = async () => {
    const res = confirm("ログを削除してよろしいですか?");
    if (!res) return;

    clearChromeStorage();
    setStorage([]);
  };

  useMemo(async () => {
    const data = await getChromeStorage(storageName);
    setStorage([...data].reverse());
  }, []);

  return (
    <div class="m-8">
      <Title title="出勤・退勤" />
      {buttons.map((button) => (
        <div class="my-2">
          <Button
            title={button.title}
            onClick={() => createTab(`#${button.location}`)}
          />
        </div>
      ))}
      <hr class="my-4" />
      <div class="my-2">
        <LinkButton
          title="マネーフォワードで確認する"
          onClick={() => chrome.tabs.create({ url })}
        />
      </div>

      <Details storage={storage} onClick={clearStorage} />
    </div>
  );
};
