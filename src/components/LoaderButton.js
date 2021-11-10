import { Button, Loader } from "reactjs-ui-components";

function LoaderButton({
  children,
  className,
  kind = "default",
  isFetching = false,
  disabled = false,
  bordered = false,
  size = "normal",
  loaderSize = "small",
  icon = "",
  outlined = false,
  ...props
}) {
  return (
    <Button
      className={className}
      kind={kind}
      disabled={disabled || isFetching}
      bordered={bordered}
      size={size}
      icon={isFetching ? "" : icon}
      outlined={outlined}
      {...props}
    >
      {isFetching ? (
        <Loader
          size={loaderSize}
          theme={outlined || kind === "transparent" ? "dark" : "light"}
        >
          Loading...
        </Loader>
      ) : (
        children
      )}
    </Button>
  );
}

export default LoaderButton;
