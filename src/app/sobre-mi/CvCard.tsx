import { MdWorkspacePremium } from "react-icons/md";

export default function CvCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <article
      className="group flex items-start gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_5px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_15px_30px_rgba(0,84,34,0.2)]"
    >
      <span
        className="inline-flex shrink-0 rounded-xl bg-secondary/50 p-3 text-primary transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white"
        aria-hidden="true"
      >
        <MdWorkspacePremium size={24} />
      </span>
      <div>
        <h3 className="text-lg font-semibold text-text group-hover:text-white">
          {title}
        </h3>
        <p className="mt-2 text-[15px] text-gray-500 group-hover:text-white/80">
          {subtitle}
        </p>
      </div>
    </article>
  );
}
