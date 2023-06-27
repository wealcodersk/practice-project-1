import Link from "next/link";

type ColumnProps = {
  title: String;
  links: Array<String>;
};

export default function FooterColumn({ title, links }: ColumnProps) {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((el, i) => (
          <Link href="/" key={i + 'link'}>
            {el}
          </Link>
        ))}
      </ul>
    </div>
  );
}
