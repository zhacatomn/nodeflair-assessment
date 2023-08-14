type Props = {
    color: "primary" | "neutral";
    label: string;
    fontType?: "mono" | "sans" | "serif";
    isBolded?: boolean;
    size?: "normal" | "small";
    style?: string;
};

const fontTypeStyles: { [key in Required<Props>["fontType"]]: string } = {
    mono: "font-mono",
    sans: "font-sans",
    serif: "font-serif",
};

const colorStyles: { [key in Props["color"]]: string } = {
    primary: "bg-green-100 text-green-500",
    neutral: "bg-gray-100 text-gray-500",
};

const sizeStyles: { [key in Required<Props>["size"]]: string } = {
    normal: "text-base",
    small: "text-sm",
};

const Chip = (props: Props) => {
    const {
        color,
        fontType = "sans",
        label,
        isBolded = false,
        size = "normal",
        style = "",
    } = props;
    return (
        <span
            className={`rounded-md py-1.5 px-2 whitespace-nowrap ${
                colorStyles[color]
            } ${fontTypeStyles[fontType]} ${isBolded ? "font-semibold" : ""} ${
                sizeStyles[size]
            } ${style}`}
        >
            {label}
        </span>
    );
};

export default Chip;
