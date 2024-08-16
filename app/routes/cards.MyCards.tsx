import { useState, useEffect } from "react";
import { cards } from "./data";

function IsMember({ act }: { act: boolean }) {
    return act ? <span>✅ Hi, VIP Member.</span> : <span>❌ Member Only!</span>;
}

function Profiles({
    id,
    nam,
    bio,
    bgp,
    imgu,
    usrn,
    cdat,
    act,
}: {
    id: number;
    nam: string;
    bio: string;
    bgp: string;
    imgu: string;
    usrn: string;
    cdat: string;
    act: boolean;
}) {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
            <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover"
                style={{ backgroundImage: `url(${imgu})` }}
                title={nam}
            />
            <div className="p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-400 flex items-center">
                        <IsMember act={act} />
                    </p>
                    <div className="text-white font-bold text-xl mb-2">{nam}</div>
                    <p className="text-gray-300 text-base">{bio}</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={bgp} alt={`Profile picture of ${nam}`} />
                    <div className="text-sm">
                        <p className="text-white leading-none">{usrn}</p>
                        <p className="text-gray-400">{cdat}</p>
                    </div>
                    <div id="btn-detail">
            <a href={`/cards/${id}`}>
            <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2"
              >
                View More
              </button>
            </a>

          </div>
                </div>
            </div>
        </div>
    );
}

interface MyCardsProps {
    cardId?: string;
}

export default function MyCards({ cardId }: MyCardsProps) {
    const [active, setActive] = useState(true);

    // Filter cards based on cardId if provided
    const items = cardId
        ? cards.filter((cardItems) => cardItems.id === parseInt(cardId, 10))
        : cards.filter((cardItems) => cardItems.active === active);

    const cardItems = items.map((cardItems) => (
        <Profiles
            key={cardItems.id}
            id={cardItems.id}
            nam={cardItems.name}
            bio={cardItems.biog}
            bgp={cardItems.bgprof}
            imgu={cardItems.userIcon}
            usrn={cardItems.userName}
            cdat={cardItems.createdAt}
            act={cardItems.active}
        />
    ));

    useEffect(() => {
        console.log(`Active state changed: ${active}`);
    }, [active]);

    return (
        <div className="flex flex-col items-center m-3 bg-gray-900 text-white p-10 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold mb-6">My Cards: Nattawut Songapiwatkun</h1>
            <div className="flex flex-row gap-4 mb-6">
                <div className="p-4 bg-gray-700 rounded-lg text-white flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-2"
                    >
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>
                    #ชอบนอนเหมือนหมี
                </div>
                <div className="p-4 bg-gray-700 rounded-lg text-white flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-2"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    ง่วง
                </div>
            </div>
            <hr className="border-gray-700 mb-6" />
            {cardItems}
            <div className="flex gap-4 mt-6 w-full">
                <button
                    className="w-1/2 bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg"
                    onClick={() => setActive(true)}
                >
                    Active
                </button>
                <button
                    className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                    onClick={() => setActive(false)}
                >
                    NonActive
                </button>
            </div>
        </div>
    );
}
