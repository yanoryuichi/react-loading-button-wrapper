import * as React from "react";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

import { useState } from "react";

export type LoadingButtonWrapperProps<T> = Omit<LoadingButtonProps, "onClick"> & {
  onClick?: () => Promise<T>;
  onSuccess?: (result: T) => void;
  onFail?: (error: any) => void;
};

export default function LoadingButtonWrapper<T>(props: LoadingButtonWrapperProps<T>) {
  const { onClick, onSuccess, onFail, ...forwardedProps } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      setLoading(true);
      onClick()
        .then(onSuccess)
        .catch(onFail)
        .finally(() => setLoading(false));
    }
  };

  return (
    <LoadingButton
      variant="outlined"
      loading={loading}
      onClick={handleClick}
      {...forwardedProps}
    >
      {props.children}
    </LoadingButton>
  );
}
