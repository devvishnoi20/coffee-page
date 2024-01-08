import Sidebar from "@/components/component/Sidebar";
import HomePage from "@/components/component/home-page";


export default function Home() {
  return (
    <div className="flex flex-row overflow-y-auto">
      <Sidebar />
      <HomePage />
    </div>
  )
}
