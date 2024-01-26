export default function Tag({tag}) {
  return (
    <li>
      <span className="inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm  text-[#F4F5F6] bg-[#1C92FFB0]">
        {tag}
      </span>
    </li>
  );
}
