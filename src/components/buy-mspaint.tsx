import { memo } from 'react';
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ShoppingBagIcon } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const BuyMspaintButton = memo(() => {
    return <AnimatedShinyText 
        className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-neutral-500 hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
        aria-label="Get key"
    >
        <ShoppingBagIcon className="mr-2" />
        <span>Get key</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </AnimatedShinyText>;
});
BuyMspaintButton.displayName = 'BuyMspaintButton';

export default BuyMspaintButton;