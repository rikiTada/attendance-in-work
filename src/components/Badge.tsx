import { useEffect, useState } from "preact/hooks";

export default function Badge({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  const [badgeColor, setBadgeColor] = useState("");

  useEffect(() => {
    const colorType = `bg-${color}-100 text-${color}-800`;
    setBadgeColor(colorType);
  }, []);

  return (
    <span
      class={`${badgeColor} text-xs font-medium me-2 px-2.5 py-0.5 rounded`}
    >
      {title}
    </span>
  );
}
