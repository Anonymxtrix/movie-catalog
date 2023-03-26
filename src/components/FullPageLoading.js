import LoadingSpinner from "@/components/LoadingSpinner";

const FullPageLoading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoadingSpinner />
    </div>
  );
};

export default FullPageLoading;
