import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 12);

  await prisma.user.upsert({
    where: { email: "admin@dropshipping.local" },
    update: {},
    create: {
      email: "admin@dropshipping.local",
      name: "Admin",
      password: hashedPassword,
    },
  });

  console.log("Seed completed: admin@dropshipping.local / admin123");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
