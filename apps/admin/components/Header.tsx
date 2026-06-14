interface Props {
  title: string;
}

export default function Header({
  title,
}: Props) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-4xl font-bold text-orange-500">
        {title}
      </h1>

      <div className="text-gray-400">
        Welcome, Founder 👋
      </div>
    </div>
  );
}