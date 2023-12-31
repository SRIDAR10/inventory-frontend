import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-3x1 mb-4">Welcome to StockPulse</h1>
      <Link href="/inventory/home/dashboard">View Dashboard</Link>
    </div>
  );
}
