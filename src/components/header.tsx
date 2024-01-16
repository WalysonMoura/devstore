import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/">devstore</Link>

        <Suspense fallback={null}></Suspense>
      </div>

      <div>
        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/WalysonMoura.png"
            alt=""
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
}
