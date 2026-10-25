import { redirect } from "next/navigation";

export default function PageAdminIndex() {
  redirect("/admin/dashboard");
}
