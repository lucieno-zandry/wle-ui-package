import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { Button } from "~/components/ui/button";

type BackButtonProps = {
    path?: string,
    label?: string,
}

export function BackButton({ path, label }: BackButtonProps) {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        if (path) {
            navigate(path);
        } else {
            window.history.back();
        }
    }, [path, navigate]);

    return <div className="mb-6">
        <Button
            type="button"
            variant="ghost"
            className="flex items-center gap-2"
            onClick={handleClick}
            aria-label={label}
        >
            <>
                <ArrowLeft className="w-4 h-4" />
                {label}
            </>
        </Button>
    </div>
}