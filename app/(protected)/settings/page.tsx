import { auth, signOut } from "@/auth";

const Page = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className="border-2 p-2 rounded-md">
          Sign out
        </button>
      </form>
    </div>
  );
};

export default Page;
