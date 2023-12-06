type Props = {
  value: number;
  label: string;
}

export default function Card({ value, label }: Props) {
  return (
    <div className="flex flex-col items-center justify-center bg-cyan-700 rounded p-3 shadow-md">
      <span>{value}</span>
      <p>{value === 1  ? label : `${label}s`}</p>
    </div>
  );
}