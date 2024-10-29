import ApplicationLogo from "@/Components/ApplicationLogo";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Link
                    href="/"
                    className="flex justify-center items-center mx-auto"
                >
                    <img
                        className="p-2 items-center justify-center bg-white rounded-lg shadow-md w-12"
                        src={
                            "https://utfs.io/f/Law7qW5D9VWFiJA3T6XDUwICKtoSTeBzqAVc80MsFHa5O9nG"
                        }
                        alt="Your Company"
                    />
                    <div className="ml-2 flex items-start flex-col flex-wrap">
                        <span
                            className={cn(
                                "font-extrabold text-gray-700 text-2xl font-varela"
                                // ValeraFont.variable
                            )}
                        >
                            Crew<span className="text-primer-700">Sync</span>
                        </span>
                        <div className="text-xs font-medium text-gray-600">
                            Powered by Tata Optima Properti
                        </div>
                    </div>
                </Link>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                {children}
            </div>
        </div>
    );
}
