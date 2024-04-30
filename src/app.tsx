import { Button, LinkButton, Title } from "./components";

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
    </div>
  );
};
