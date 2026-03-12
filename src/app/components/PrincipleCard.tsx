import type { IconType } from "react-icons";

interface Props {
  title: string;
  description: string;
  icon: IconType;
}

export default function PrincipleCard({ title, description, icon: Icon }: Props) {
  return (
    <article
      className="group w-full max-w-[360px] rounded-[32px] border border-gray-200 bg-white p-12 shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_20px_40px_rgba(0,84,34,0.3)]"
    >
      <div
        className="inline-flex rounded-2xl bg-secondary/50 p-4 transition-colors duration-300 group-hover:bg-white/20"
        aria-hidden="true"
      >
        <Icon size={32} className="text-primary group-hover:text-white" />
      </div>
      <h3 className="mt-8 text-2xl font-bold text-text group-hover:text-white">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white/90">
        {description}
      </p>
    </article>
  );
}
