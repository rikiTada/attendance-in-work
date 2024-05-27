import { Storage as StorageType } from "../types/storageType";
import { IconButton } from "./Button";

export const Details = ({
  storage,
  onClick,
}: {
  storage: StorageType;
  onClick: () => void;
}) => {
  return (
    <div className={"my-2 flex justify-center"}>
      <details className=" w-full text-sm text-gray-500 ">
        <summary>ログを確認する</summary>
        {storage && storage.length ? (
          <>
            {[...storage].map((log) => (
              <div class={" py-2 border-b-2"}>
                <p className={"pl-4 py-1"}>
                  {log.type}: {log.Date}
                </p>
                <span class="flex-1"></span>
              </div>
            ))}
            <IconButton title="ログを削除する" onClick={onClick} />
          </>
        ) : (
          <>
            <p className="pl-4 py-1">- ログはありません -</p>
          </>
        )}
      </details>
    </div>
  );
};
