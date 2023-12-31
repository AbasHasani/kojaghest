import { getServerSession } from "next-auth";
import { ProfileForm as Form } from "./form";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const createShop = async (
  name: string,
  highestCredit: string,
  website: string,
  specialContracts: string
) => {
  "use server";
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    // @ts-ignore
    where: { number: session?.number || "none" },
  });
  if (!user) return;
  await prisma.provider.create({
    data: {
      name,
      specialContracts,
      website,
      highestCredit: Number(highestCredit),
      userId: user?.id,
    },
  });
  console.log("Hello " + session?.user?.name);
};

const Page = async () => {
  // const session = await getServerSession(authOptions);
  return (
    <div className="max-w-[40rem] mx-auto mt-5">
      <Form createShop={createShop} />
    </div>
  );
};

export default Page;
