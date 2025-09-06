import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function MenuText({text}) {
    return (
        <Link
            href="/contact"
            className={cn(
                "relative text-white font-medium text-sm lg:text-base",
                "transition-all duration-300 ease-in-out",
                "hover:text-y-900",
                "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5",
                "after:bg-gradient-to-r after:from-blue-500 after:to-purple-600",
                "after:transition-all after:duration-300 after:ease-in-out",
                "hover:after:w-full"
            )}
        >
            {text}
        </Link>
    )
}