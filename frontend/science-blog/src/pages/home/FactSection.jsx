import TypeIt from "typeit-react";
import { useEffect, useState } from "react";

export const FactSection = ({fact}) => {

    const [localFact, setLocalFact] = useState('');

    useEffect(() => {
        if(fact !== null) {
            setLocalFact(fact[0].fact_text)
        }
    }, [fact]);

    return (
        <section>
            <div className="w-full mx-auto p-4 flex flex-col h-screen mt-72 bg-black">
                <h2 className="m-auto text-[#DEDEDE] text-7xl drop-shadow-xl font-bold">
                    Fact of the day!
                </h2>
                {localFact ? <div className="m-auto text-[#DEDEDE] text-5xl drop-shadow-xl">
                    <TypeIt
                        options={{
                            strings: [localFact],
                            speed: 50,
                            waitUntilVisible: true,
                        }}
                    />
                </div> :
                    <div className="m-auto text-[#DEDEDE] text-5xl drop-shadow-xl">
                        <h3>Loading... refreshing the page might help</h3>
                    </div>
                }
                <p className="m-auto text-3xl text-[#89939E]">
                    Congratulations! You just learned something new. Do not stop here, go ahead and read some of our articles
                </p>
            </div>
        </section>
    )
}
