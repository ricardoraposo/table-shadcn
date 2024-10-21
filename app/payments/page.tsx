// import "../../components/theme/themes.css"
import { ThemeProvider } from "@/components/theme/theme-provider";
import { columns, payments } from "./columns";
import { DataTable } from "./data-table";

export default function PaymentsPage() {
  return (
    <ThemeProvider className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
    </ThemeProvider>
  )
}


