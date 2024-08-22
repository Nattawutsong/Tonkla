import { useState } from "react";
import { cards } from "./data";

function IsMember({ act }: { act: boolean }) {
  if (act)
    return <span> ✅ Hi, VIP Member.</span>
  else
    return <span>❌ Member Only!</span>
}

function Profiles({ id, nam, bio, bgp, imgu, usrn, cdat, act }: { id: number, nam: string, bio: any, bgp: string, imgu: string, usrn: string, cdat: string, act: boolean }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${imgu})` }} title={nam}>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            {/* <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg> */}
            <IsMember
              act={act}
            />
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{nam}</div>
          <p className="text-gray-700 text-base">{bio}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={bgp} title={nam} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{usrn}</p>
            <p className="text-gray-600">{cdat}</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default function MyCards() {
    const [active,setActive] = useState(true);

  //let / var / const
  const name = "Nattawut Songapiwatkun";
  const note = "#ชอบนอนเหมือนหมี";
  const note2 = "ง่วง";
  const chk = true;

  const items = cards.filter(cardItems =>
    cardItems.active === active


  );

  const cardItems = items.map(cardItems =>
    <Profiles
      id={cardItems.id}
      nam={cardItems.name}
      bio={cardItems.biog}
      bgp={cardItems.bgprof}
      imgu={cardItems.userIcon}
      usrn={cardItems.userName}
      cdat={cardItems.createdAt}
      act={cardItems.active}
    />
  );

      function handleClickActive(){
        
        setActive(true);
        alert("After, handleClickActive --> "+active);
      }

      function handleClickNonActive(){
        
        setActive(false);
        alert("After, handleClickNonActive --> "+active);
      }

  return (
    <center>
    <div className="m-3 bg-amber-100 p-10">
      <center><h1 className="basis-1/4 M-2 p-3 bg-red-300 text-3x1 font-bold">My Cards: Natttawut Songapiwatkun</h1></center>
      <div className="flex flex-row">
      
        <div className="basis-1/4 M-2 p-3 bg-green-300 rounded-3x1 text-red-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
</svg>
{note}</div>
        <div className="basis-1/4 M-2 p-3 bg-green-300 rounded-3x1 text-red-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
</svg>
{note2}</div>
      </div>
      <hr />
      {/* // <Profiles />  */}
      {cardItems}
      </div>
      
      <button className="w-1/2 bg-lime-500" onClick={handleClickActive}> Active</button>
      <button className="w-1/2 bg-red-500" onClick={handleClickNonActive}> NonActive</button>

    </center>
  );
}