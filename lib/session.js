
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function getSession() {
  try {
    return await auth.api.getSession({ headers: await headers() });
  } catch (error) {
    console.error("Could not read session:", error);
    return null;
  }
}

export async function requireSession(currentPath) {
  const session = await getSession();
  if (!session) {
    redirect(
      `/signin?message=login-required&redirect=${encodeURIComponent(currentPath)}`
    );
  }
  return session;
}
