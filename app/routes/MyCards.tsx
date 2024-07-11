import {cards} from "./data";

function IsMember ({ act } : { act:boolean }){
    if(act)
        return <span> ✅ Hi, VIP Member.</span>
    else
        return <span>❌ Member Only!</span>
}

function Profiles ({id, nam, bio, bgp, imgu, usrn, cdat, act} : {id:number, nam:string, bio:any, bgp:string, imgu:string, usrn:string, cdat:string, act:boolean}) {
     return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${imgu})`}} title={nam}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {/* <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg> */}
              <IsMember
              act = {act}
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

export default function MyCards () {
    //let / var / const
    const name = "Nattawut Songapiwatkun";
    const note = "#ชอบนอนเหมือนหมี";
    const chk = true;
    const cardItems = cards.map(cardItems => 
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
    return( 
        <>
            <h1 className="text-3x1">My Cards: Natttawut Songapiwatkun</h1>
            <p>{note}</p>
            <hr />  
            {/* // <Profiles />  */}
            {cardItems}     
        </>
    );
}