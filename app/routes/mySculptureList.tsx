import { useState } from "react";
import { SculptureLists } from "./SculptureLists";

export default function EProject() {
    const [index, setIndex] = useState(0);
    const [sctList, setSctList] = useState(SculptureLists);

    function handleClickNext() {
        if (index < SculptureLists.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleBackClickNext() {
        if (index < SculptureLists.length) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }
    function handleClickdelete() {

    }
    let sculpture = SculptureLists[index];

    return (
        <>
            <button onClick={handleClickNext}> Next</button>

            {
                sctList.map(sculpture => (
                    <div key={sculpture.id}>

                        <h2>
                            <i>{sculpture.name}</i> โดย {sculpture.author}
                        </h2>
                        <h3>
                            {index + 1} จาก {SculptureLists.length}
                        </h3>
                        <img
                            src={sculpture.url}
                            title={sculpture.name}
                        />
                        <p>
                            {sculpture.Description}
                        </p>
                        <a href={sculpture.Reference}
                            target="_blank">เอกสารอ้างอิงฉบับเต็ม</a>
        <button onClick={() =>
            {
                setSctList(
                    sctList.filter(tmp =>
                        tmp.id !== sculpture.id
                    )
                );
            }
        }>Delete</button>

                        
                    </div >
                    ))
            }
        </>
    )
}

