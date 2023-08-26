import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import useAsyncAction from "./useAsyncAction.hook";

export default function Demo() {
  const action = useAsyncAction({
    onExecute: (): Promise<string> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("executed");
        }, 3000);
      });
    },
    onSucceed: (result) => console.log("succeeded: " + result),
    onFailure: (result) => console.log("error" + result)
  });

  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton
        variant="outlined"
        onClick={action.execute}
        loading={action.isExecuting}
      >
        Execute asyncolonusly
      </LoadingButton>
    </Stack>
  );
}
