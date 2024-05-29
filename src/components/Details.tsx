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
      <details class="w-full text-sm text-gray-500 transition-all duration-300 ">
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
                <div class={"py-2 border-b-[1.5px] relative"}>
                  {idx === 0 && (
                    <span
                      class={
                        "text-green-500 absolute -left-1 top-1/2 -translate-y-1/2 text-[0.5rem] [writing-mode:vertical-rl]"
                      }
                    >
                      最近
                    </span>
                  )}
                  <p class={"px-4 py-1 flex items-center"}>
                    <Badge title={log.type} color={changeColor(log.type)} />
                    <span class="flex-1"></span>
                    <span
                      class={`${idx === 0 && "text-green-500"} tabular-nums`}
                    >
                      {zeroPadding(log.Date)}
                    </span>
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
