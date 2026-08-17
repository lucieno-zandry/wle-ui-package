
import React from "react";
import { LoaderCircle } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants, Button as Btn } from "~/components/ui/button";

export type ButtonProps = {
    isLoading?: boolean
} & React.ComponentProps<"button">

export function Button({
    isLoading = false,
    children,
    ...buttonProps
}: ButtonProps & VariantProps<typeof buttonVariants>) {
    const disabled = React.useMemo(() => !!(isLoading || buttonProps.disabled || buttonProps["aria-busy"]), [buttonProps.disabled, isLoading, buttonProps["aria-busy"]]);

    return <Btn {...buttonProps} disabled={disabled}>
        {isLoading ? <LoaderCircle className="animate-spin text-muted-foreground" /> : children}
    </Btn>
}