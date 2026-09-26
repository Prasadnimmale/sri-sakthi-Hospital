import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  /** Larger mark and wordmark below the sm breakpoint (mobile header). */
  prominent?: boolean;
};

/** Hospital logo mark + wordmark. */
export default function Logo({ compact = false, prominent = false }: LogoProps) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5">
      <span
        className={`relative grid shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-[0_6px_16px_-6px_rgba(232,117,36,0.55)] ${
          prominent ? "size-11 sm:size-10" : "size-10"
        }`}
      >
        <Image
          src="/images/logo-dd.png"
          alt="Sri Sakthi Hospital"
          width={40}
          height={40}
          className="size-full object-contain"
        />
      </span>
      {!compact && (
        <span className="min-w-0 leading-tight">
          <span
            className={`block font-bold tracking-tight text-ink ${
              prominent ? "text-[16px] sm:text-[15px]" : "text-[15px]"
            }`}
          >
            Sri Sakthi Hospital
          </span>
          <span
            className={`block font-medium uppercase text-primary-dark ${
              prominent ? "text-[12px] tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em]" : "text-[11px] tracking-[0.18em]"
            }`}
          >
            Rajahmundry
          </span>
        </span>
      )}
    </span>
  );
}
