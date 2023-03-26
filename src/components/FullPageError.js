import Image from "next/image";

const FullPageError = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Image
        src="/undraw_server_down_s-4-lk.svg"
        alt="Error"
        height={800}
        width={400}
      />
      <h1 className="mt-6 text-bold text-2xl text-gray-400">
        Oops, an error occurred. Try refreshing the page.
      </h1>
    </div>
  );
};

export default FullPageError;
