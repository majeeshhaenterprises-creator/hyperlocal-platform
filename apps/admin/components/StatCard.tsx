interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
}

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-orange-500 transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );
}