import { useState } from "react";
import JobListItem, { JobListItemData } from "./JobListItem";
import JobDetails from "./JobDetails";

const fakeData: JobListItemData[] = [
    {
        id: 1,
        company: {
            name: "GovTech",
            rating: 4,
        },
        title: "Solution Architect, National Digital Identity",
        specialisation: "Solutions",
        createdAt: new Date(Date.now()),
        location: "Singapore",
        techStack: ["OpenID", "Container", "OAuth", "AWS", "Rest API", "NoSQL"],
    },
    {
        id: 2,
        company: {
            name: "Crypto.com",
            rating: 4.4,
        },
        title: "Product Manager",
        specialisation: "PM",
        createdAt: new Date(Date.now() - 3 * (60 * 60 * 1000)),
        location: "Malaysia",
        techStack: [],
        salary: { value: "S$5,000 - S$7,000 / mth", isEstimate: true },
    },
    {
        id: 3,
        company: {
            name: "Avanade",
            rating: 4,
        },
        title: "Data Engineer (PowerBI, Azure Databricks, Azure Data Factory)",
        specialisation: "Data Eng",
        createdAt: new Date("2023-08-10"),
        techStack: ["Powershell", "ETL", "Amazon S3", "AWS", "API", "Factory"],
    },
    {
        id: 4,
        company: {
            name: "PayPal",
            rating: 4.1,
        },
        title: "Data Analyst 2",
        specialisation: "Data Analyst",
        createdAt: new Date("2023-08-01"),
        techStack: ["Strategy", "Analytics", "R", "BigQuery", "SQL", "Python"],
    },
    {
        id: 5,
        company: {
            name: "Dyson",
        },
        title: "Lead Data Scientist (Connectivity)",
        specialisation: "Data Sci",
        createdAt: new Date("2023-08-08"),
        techStack: [
            "AWS",
            "play",
            "Analytics",
            "BigQuery",
            "RedShift",
            "SQL",
            "Python",
        ],
        salary: { value: "S$6,000 - S$11,000 / mth", isEstimate: false },
    },
];

const App = () => {
    const [selectedItem, setSelectedItem] = useState(fakeData[0]);
    return (
        <main className="w-full h-screen bg-stone-100 flex justify-center p-4">
            <div
                className="w-full grid gap-3"
                style={{ maxWidth: "1110px", gridTemplateColumns: "2fr 3fr" }}
            >
                <div className="flex flex-col gap-3 overflow-auto px-1">
                    {fakeData.map((itemData) => {
                        return (
                            <JobListItem
                                data={itemData}
                                key={itemData.id}
                                onClick={(data) => setSelectedItem(data)}
                                isSelected={itemData.id === selectedItem.id}
                            />
                        );
                    })}
                </div>
                <div className="h-full overflow-auto px-1">
                    <JobDetails data={selectedItem} />
                </div>
            </div>
        </main>
    );
};

export default App;
