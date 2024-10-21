"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown, MoreHorizontal } from "lucide-react"

type Payment = {
  id: string
  amount: number
  status: "completed" | "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "1a2b3c4d",
    amount: 250,
    status: "completed",
    email: "user1@example.com",
  },
  {
    id: "2b3c4d5e",
    amount: 300,
    status: "pending",
    email: "user2@example.com",
  },
  {
    id: "3c4d5e6f",
    amount: 150,
    status: "failed",
    email: "user3@example.com",
  },
  {
    id: "4d5e6f7g",
    amount: 200,
    status: "processing",
    email: "user4@example.com",
  },
  {
    id: "5e6f7g8h",
    amount: 175,
    status: "pending",
    email: "user5@example.com",
  },
  {
    id: "6f7g8h9i",
    amount: 225,
    status: "completed",
    email: "user6@example.com",
  },
  {
    id: "7g8h9i0j",
    amount: 130,
    status: "processing",
    email: "user7@example.com",
  },
  {
    id: "8h9i0j1k",
    amount: 95,
    status: "failed",
    email: "user8@example.com",
  },
  {
    id: "9i0j1k2l",
    amount: 275,
    status: "pending",
    email: "user9@example.com",
  },
  {
    id: "0j1k2l3m",
    amount: 190,
    status: "completed",
    email: "user10@example.com",
  },
  {
    id: "1k2l3m4n",
    amount: 205,
    status: "failed",
    email: "user11@example.com",
  },
  {
    id: "2l3m4n5o",
    amount: 140,
    status: "processing",
    email: "user12@example.com",
  },
  {
    id: "3m4n5o6p",
    amount: 300,
    status: "completed",
    email: "user13@example.com",
  },
  {
    id: "4n5o6p7q",
    amount: 110,
    status: "pending",
    email: "user14@example.com",
  },
  {
    id: "5o6p7q8r",
    amount: 185,
    status: "failed",
    email: "user15@example.com",
  },
  {
    id: "6p7q8r9s",
    amount: 160,
    status: "processing",
    email: "user16@example.com",
  },
  {
    id: "7q8r9s0t",
    amount: 275,
    status: "completed",
    email: "user17@example.com",
  },
  {
    id: "8r9s0t1u",
    amount: 125,
    status: "failed",
    email: "user18@example.com",
  },
  {
    id: "9s0t1u2v",
    amount: 200,
    status: "pending",
    email: "user19@example.com",
  },
  {
    id: "0t1u2v3w",
    amount: 245,
    status: "processing",
    email: "user20@example.com",
  },
  {
    id: "1u2v3w4x",
    amount: 220,
    status: "completed",
    email: "user21@example.com",
  },
  {
    id: "2v3w4x5y",
    amount: 130,
    status: "failed",
    email: "user22@example.com",
  },
  {
    id: "3w4x5y6z",
    amount: 300,
    status: "pending",
    email: "user23@example.com",
  },
  {
    id: "4x5y6z7a",
    amount: 275,
    status: "processing",
    email: "user24@example.com",
  },
  {
    id: "5y6z7a8b",
    amount: 150,
    status: "completed",
    email: "user25@example.com",
  },
  {
    id: "6z7a8b9c",
    amount: 190,
    status: "failed",
    email: "user26@example.com",
  },
  {
    id: "7a8b9c0d",
    amount: 100,
    status: "pending",
    email: "user27@example.com",
  },
  {
    id: "8b9c0d1e",
    amount: 165,
    status: "processing",
    email: "user28@example.com",
  },
  {
    id: "9c0d1e2f",
    amount: 225,
    status: "completed",
    email: "user29@example.com",
  },
  {
    id: "0d1e2f3g",
    amount: 140,
    status: "failed",
    email: "user30@example.com",
  },
  {
    id: "1e2f3g4h",
    amount: 285,
    status: "pending",
    email: "user31@example.com",
  },
  {
    id: "2f3g4h5i",
    amount: 195,
    status: "processing",
    email: "user32@example.com",
  },
  {
    id: "3g4h5i6j",
    amount: 250,
    status: "completed",
    email: "user33@example.com",
  },
  {
    id: "4h5i6j7k",
    amount: 180,
    status: "failed",
    email: "user34@example.com",
  },
  {
    id: "5i6j7k8l",
    amount: 215,
    status: "pending",
    email: "user35@example.com",
  },
  {
    id: "6j7k8l9m",
    amount: 125,
    status: "processing",
    email: "user36@example.com",
  },
  {
    id: "7k8l9m0n",
    amount: 195,
    status: "completed",
    email: "user37@example.com",
  },
  {
    id: "8l9m0n1o",
    amount: 275,
    status: "failed",
    email: "user38@example.com",
  },
  {
    id: "9m0n1o2p",
    amount: 155,
    status: "pending",
    email: "user39@example.com",
  },
  {
    id: "0n1o2p3q",
    amount: 165,
    status: "processing",
    email: "user40@example.com",
  },
  {
    id: "1o2p3q4r",
    amount: 140,
    status: "completed",
    email: "user41@example.com",
  },
  {
    id: "2p3q4r5s",
    amount: 185,
    status: "failed",
    email: "user42@example.com",
  },
  {
    id: "3q4r5s6t",
    amount: 175,
    status: "pending",
    email: "user43@example.com",
  },
  {
    id: "4r5s6t7u",
    amount: 260,
    status: "processing",
    email: "user44@example.com",
  },
  {
    id: "5s6t7u8v",
    amount: 135,
    status: "completed",
    email: "user45@example.com",
  },
  {
    id: "6t7u8v9w",
    amount: 245,
    status: "failed",
    email: "user46@example.com",
  },
  {
    id: "7u8v9w0x",
    amount: 195,
    status: "pending",
    email: "user47@example.com",
  },
  {
    id: "8v9w0x1y",
    amount: 150,
    status: "processing",
    email: "user48@example.com",
  },
  {
    id: "9w0x1y2z",
    amount: 270,
    status: "completed",
    email: "user49@example.com",
  },
  {
    id: "0x1y2z3a",
    amount: 175,
    status: "failed",
    email: "user50@example.com",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
    <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
    <Checkbox 
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },

  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          {!column.getIsSorted() ? <ArrowUpDown /> : column.getIsSorted() === "asc" ? <ArrowUp /> : <ArrowDown />}
        </Button>
      )
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <div className="text-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          {!column.getIsSorted() ? <ArrowUpDown /> : column.getIsSorted() === "asc" ? <ArrowUp /> : <ArrowDown />}
        </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return (
        <div className="text-center font-medium">
          {formatted}
        </div>
      )
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 p-0 w-full">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
