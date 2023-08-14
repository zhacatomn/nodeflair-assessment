import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    elevation: "none" | "low" | "high";
    hoverElevation?: "none" | "low" | "high";
    isOutlined?: boolean;
    style?: string;
    onClick?: () => any;
}>;

const elevationStyles: { [key in Props["elevation"]]: string } = {
    none: "",
    low: "shadow-sm",
    high: "shadow-lg",
};

const hoverElevationStyles: {
    [key in Required<Props>["hoverElevation"]]: string;
} = {
    none: "",
    low: "hover:shadow-sm",
    high: "hover:shadow-lg",
};

const Paper = (props: Props) => {
    const {
        elevation,
        hoverElevation,
        isOutlined = false,
        style = "",
        onClick = () => {},
    } = props;
    return (
        <div
            className={`bg-white rounded-lg ${elevationStyles[elevation]} ${
                isOutlined ? "border border-gray-300" : ""
            } ${
                hoverElevation != null
                    ? hoverElevationStyles[hoverElevation]
                    : ""
            } ${style}`}
            onClick={onClick}
        >
            {props.children}
        </div>
    );
};

export default Paper;
