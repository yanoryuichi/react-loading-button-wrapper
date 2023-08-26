import * as React from "react";
import LoadingButtonWrapper from "./LoadingButtonWrapper";

export default function ButtonWithWrapper() {
  const [message, setMessage] = React.useState<string>("");

  const handleClick = (): Promise<string> => {
    setMessage("実行中");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("実行完了");
      }, 2000);
    });
  };

  const handleSuccess = () => {
    setMessage("実行完了");
  };

  const handleFail = (error: any) => {
    setMessage("失敗" + error);
  };

  return (
    <div>
      <LoadingButtonWrapper
        onClick={handleClick}
        onSuccess={handleSuccess}
        onFail={handleFail}
      >
        非同期処理を実行する - ラッパー
      </LoadingButtonWrapper>
      &nbsp;
      <span>{message}</span>
    </div>
  );
}
