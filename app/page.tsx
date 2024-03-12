import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="text-4xl flex gap-x-4 p-20">
      Next Auth
      <Button size="lg" className="bg-indigo-500 text-white ">
        Login
      </Button>
    </div>
  );
};

export default Page;
