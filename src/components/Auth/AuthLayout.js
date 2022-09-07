export function AuthLayout({ children }) {
  return (
    <div
      className={
        "w-full h-full gap-10 justify-center flex flex-col items-center bg-gray-200"
      }
    >
      <h2>Auth page</h2>
      <div className={"bg-white rounded-xl px-4"}>{children}</div>
    </div>
  );
}
