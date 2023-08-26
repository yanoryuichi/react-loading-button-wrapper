import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import useAsyncAction from "./useAsyncAction.hook";

export default function ButtonWithCustomHook() {
  const [message, setMessage] = React.useState<string>("");

  const action = useAsyncAction<string>({
    onClick: (): Promise<string> => {
      setMessage("実行中");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("実行完了");
        }, 2000);
      });
    },
    onSuccess: (result) => {
      setMessage(result);
    },
    onFail: (error) => {
      setMessage("失敗" + error);
    },
  });

  return (
    <div>
      <LoadingButton
        variant="outlined"
        onClick={(_e: React.MouseEvent<HTMLButtonElement>) =>
          action.execute()
        }
        loading={action.isExecuting}
      >
        非同期処理を実行する - カスタムフック
      </LoadingButton>
      &nbsp;
      <span>{message}</span>
    </div>
  );
}
