import Chip from "./components/Chip";
import Paper from "./components/Paper";
import LocationIcon from "/assets/location.svg";

export type JobListItemData = {
    id: number;
    company: {
        name: string;
        rating?: number;
        profileImgSrc: string;
    };
    title: string;
    specialisation: string;
    createdAt: Date;
    location?: string;
    salary?: {
        value: string;
        isEstimate: boolean;
    };
    techStack: string[];
};

type PropType = {
    data: JobListItemData;
    isSelected?: boolean;
    onClick: (data: JobListItemData) => any;
};

const ListItem = (props: PropType) => {
    const { data, isSelected = false, onClick } = props;
    const iconWidth: number = 45;

    const hoursSinceCreation = Math.round(
        (Date.now() - data.createdAt.getTime()) / (1000 * 60 * 60)
    );
    const daysSinceCreation = Math.round(hoursSinceCreation / 24);
    const postingStr =
        hoursSinceCreation < 1
            ? "just now"
            : hoursSinceCreation < 24
            ? `about ${hoursSinceCreation} hour${
                  hoursSinceCreation > 1 ? "s" : ""
              } ago`
            : `about ${daysSinceCreation} day${
                  daysSinceCreation > 1 ? "s" : ""
              } ago`;
    return (
        <Paper
            elevation="low"
            hoverElevation="high"
            style={`cursor-pointer transition ease-in-out px-4 hover:-translate-y-1 ${
                isSelected ? "border-4 border-green-500" : ""
            }`}
            isOutlined={true}
            onClick={() => onClick(data)}
        >
            <div className="pt-4 pb-3">
                <div className="flex">
                    <div
                        style={{ width: `${iconWidth}px` }}
                        className="shrink-0 mr-2"
                    >
                        <img
                            src={`./assets/${data.company.profileImgSrc}`}
                            className="rounded-md"
                        />
                    </div>
                    <div className="grow">
                        <span className="text-sm">
                            <span>{data.company.name}</span>
                            {data.company.rating && (
                                <span className="ml-4">
                                    {data.company.rating} ★
                                </span>
                            )}
                        </span>
                        <div className="font-bold line-clamp-2">
                            {data.title}
                        </div>
                    </div>
                    <div className="shrink-0">
                        <Chip
                            label={data.specialisation}
                            color="primary"
                            isBolded={true}
                            size="small"
                        />
                    </div>
                </div>
                <div
                    className="text-sm"
                    style={{ marginLeft: `calc(${iconWidth}px + 0.5em)` }}
                >
                    <div className="flex items-center flex-wrap">
                        <span className="text-green-500 font-bold">
                            {postingStr}
                        </span>
                        {data.location && (
                            <span className="ml-2 text-sm text-gray-500 inline-flex items-center">
                                <img
                                    src={LocationIcon}
                                    className="inline mr-1"
                                    width="10px"
                                />
                                {data.location}
                            </span>
                        )}
                    </div>
                    {data.salary && (
                        <div className="mt-2">
                            <span className="font-semibold">
                                {data.salary.value}
                            </span>
                            {data.salary.isEstimate && (
                                <Chip
                                    label="EST"
                                    color="neutral"
                                    size="small"
                                    style="ml-2"
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="border-t border-gray-300 pt-2 pb-4 truncate">
                {data.techStack.map((value, idx) => {
                    return (
                        <Chip
                            label={value}
                            color="neutral"
                            isBolded={true}
                            fontType="mono"
                            style="mr-1"
                            key={idx}
                        />
                    );
                })}
            </div>
        </Paper>
        // <div
        //     onClick={() => onClick(data)}
        //     className={`cursor-pointer transition ease-in-out bg-white px-4 rounded-lg shadow-sm
        //     hover:-translate-y-1 hover:shadow-lg
        //     ${
        //         isSelected
        //             ? "border-4 border-green-500"
        //             : "border border-gray-300"
        //     }`}
        // >

        // </div>
    );
};

export default ListItem;
