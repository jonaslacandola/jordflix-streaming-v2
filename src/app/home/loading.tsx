import Spinner from "../component/Spinner";

export default function Loading() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Spinner />
    </div>
  );
}
