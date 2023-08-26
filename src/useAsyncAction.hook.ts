import { useState } from "react";

export type ActionProps<R, I = undefined> = {
  onClick: (input?: I) => Promise<R>;
  onSuccess?: (result: R) => void;
  onFail?: (error: any) => void;
};

export type ActionResult<R, I = undefined> = {
  isExecuting: boolean;
  result?: R;
  error?: any;
  execute: (input?: I) => void;
};

export default function useAsyncAction<R, I = undefined>(
  config: ActionProps<R, I>
): ActionResult<R, I> {
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [result, setResult] = useState<R>();

  const handleExecute = (input?: I) => {
    setIsExecuting(true);
    setError(undefined);
    setResult(undefined);

    config
      .onClick(input)
      .then((result: R) => {
        setResult(result);
        if (config.onSuccess) config.onSuccess(result);
      })
      .catch((error) => {
        setError(error);
        if (config.onFail) config.onFail(error);
      })
      .finally(() => setIsExecuting(false));
  };

  return {
    isExecuting,
    result,
    error,
    execute: handleExecute
  };
}
