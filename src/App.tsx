import ListItem from "./ListItem";

const App = () => {
    return (
        <main className="w-full h-screen bg-stone-100 flex justify-center p-4">
            <div
                className="w-full grid gap-3 h-full"
                style={{ maxWidth: "1110px", gridTemplateColumns: "3fr 5fr" }}
            >
                <div className="flex flex-col gap-3 overflow-auto px-2">
                    <ListItem />
                    <ListItem isSelected={true} />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <div className="h-full bg-white rounded-lg p-4 shadow-sm">
                    We're no strangers to love You know the rules and so do I
                    (do I) A full commitment's what I'm thinking of You wouldn't
                    get this from any other guy I just wanna tell you how I'm
                    feeling Gotta make you understand Never gonna give you up
                    Never gonna let you down Never gonna run around and desert
                    you Never gonna make you cry Never gonna say goodbye Never
                    gonna tell a lie and hurt you We've known each other for so
                    long Your heart's been aching, but you're too shy to say it
                    (say it) Inside, we both know what's been going on (going
                    on) We know the game and we're gonna play it And if you ask
                    me how I'm feeling Don't tell me you're too blind to see
                    Never gonna give you up Never gonna let you down Never gonna
                    run around and desert you Never gonna make you cry Never
                    gonna say goodbye Never gonna tell a lie and hurt you Never
                    gonna give you up Never gonna let you down Never gonna run
                    around and desert you Never gonna make you cry Never gonna
                    say goodbye Never gonna tell a lie and hurt you We've known
                    each other for so long Your heart's been aching, but you're
                    too shy to say it (to say it) Inside, we both know what's
                    been going on (going on) We know the game and we're gonna
                    play it I just wanna tell you how I'm feeling Gotta make you
                    understand Never gonna give you up Never gonna let you down
                    Never gonna run around and desert you Never gonna make you
                    cry Never gonna say goodbye Never gonna tell a lie and hurt
                    you Never gonna give you up Never gonna let you down Never
                    gonna run around and desert you Never gonna make you cry
                    Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna
                    run around and desert you Never gonna make you cry Never
                    gonna say goodbye Never gonna tell a lie and hurt you
                </div>
            </div>
        </main>
    );
};

export default App;
