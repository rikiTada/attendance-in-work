import { changeColor, zeroPadding } from "@/lib";
import { Storage as StorageType } from "../types/storageType";
import Badge from "./Badge";
import { IconButton } from "./Button";

export const Details = ({
  storage,
  onClick,
}: {
  storage: StorageType;
  onClick: () => void;
}) => {
  return (
    <div class={"my-6 flex justify-center"}>
      <details class="w-full text-sm text-gray-500">
        <summary
          class={
            "cursor-pointer border p-2 px-4 rounded-sm outline-none hover:bg-zinc-100"
          }
        >
          ログを確認する
        </summary>
        {storage && storage.length ? (
          <>
            {[...storage].map((log, idx) =>
              idx <= 4 ? (
                <div class={"py-2 border-b-2"}>
                  <p class={"px-4 py-1 flex items-center"}>
                    <Badge title={log.type} color={changeColor(log.type)} />
                    <span class="flex-1"></span>
                    <span class="tabular-nums">{zeroPadding(log.Date)}</span>
                  </p>
                </div>
              ) : (
                <>
                  {idx === 5 && (
                    <p class="pl-4 py-1 grid place-content-center">︙</p>
                  )}
                </>
              )
            )}
            <IconButton title="全てのログを削除する" onClick={onClick} />
          </>
        ) : (
          <>
            <p class="pl-4 py-1">- ログはありません -</p>
          </>
        )}
      </details>
    </div>
  );
};
