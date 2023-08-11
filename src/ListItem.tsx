type PropType = {
    isSelected?: boolean;
};

const ListItem = (props: PropType) => {
    const { isSelected = false } = props;
    const iconWidth: number = 45;
    return (
        <div
            className={`cursor-pointer transition ease-in-out bg-white px-4 rounded-lg shadow-sm 
            hover:-translate-y-1 hover:shadow-lg
            ${
                isSelected
                    ? "border-2 border-green-500"
                    : "border border-gray-300"
            }`}
        >
            <div className="pt-4 pb-3">
                <div className="flex">
                    <div style={{ width: `${iconWidth}px` }}>img</div>
                    <div className="grow">
                        <span className="text-sm">Hukumonline.com</span>
                        <div className="font-bold">
                            Internship Frontend Engineer
                        </div>
                    </div>
                    <div>
                        <div className="text-sm rounded-md bg-green-100 text-green-500 font-semibold py-1 px-2">
                            Frontend
                        </div>
                    </div>
                </div>
                <div
                    className="text-sm"
                    style={{ marginLeft: `${iconWidth}px` }}
                >
                    <div>
                        <span className="text-green-500 font-bold">
                            about 20 hours ago
                        </span>
                    </div>
                    <div className="font-semibold mt-2">
                        US$16,506,832 - US$58,952,969 / mth
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 pt-1 pb-2 truncate">
                {[...Array(10).keys()].map((idx) => {
                    return (
                        <span
                            className="text-sm rounded-md bg-gray-100 text-gray-500 font-semibold py-1 px-2 font-mono mr-1"
                            key={idx}
                        >
                            Javascript
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default ListItem;
