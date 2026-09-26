import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

/** Hospital logo mark + wordmark. */
export default function Logo({ compact = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-[0_6px_16px_-6px_rgba(232,117,36,0.55)]">
        <Image
          src="/images/logo-dd.png"
          alt="Sri Sakthi Hospital"
          width={40}
          height={40}
          className="size-full object-contain"
        />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-[15px] font-bold tracking-tight text-ink">
            Sri Sakthi Hospital
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-primary-dark">
            Rajahmundry
          </span>
        </span>
      )}
    </span>
  );
}
