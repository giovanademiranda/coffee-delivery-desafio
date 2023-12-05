import Header from "@/components/Header";
import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {

  return (
    <div className="flex w-full max-w-screen-xl p-2 md:pl-2 md:pr-2 md:pt-0">
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  )

}