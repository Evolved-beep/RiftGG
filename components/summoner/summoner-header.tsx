type SummonerHeaderProps = {
    gameName : string;
    tagLine : string; 
    profileIconId : number;
    summonerLevel : number;
}

const SummonerHeader = ({gameName, tagLine, profileIconId,summonerLevel}:SummonerHeaderProps) => {
  return (
    <div className='bg-[#151B3B] border border-[#1e2544] rounded-2xl p-8'>
                         <img
                            src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/profileicon/${profileIconId}.png`}
                            alt='Profile Icon'
                            className='w-24 h-24 rounded-full border-4 border-[#5B8DEE]'
                        />
                        <h1 className='text-white text-3xl font-bold'>
                            {gameName}
                            <span className='text-gray-400'>#{tagLine}</span>
                        </h1>
                        <p className='text-gray-400'>Lvl {summonerLevel}</p>
        </div>
  )
}


export default SummonerHeader