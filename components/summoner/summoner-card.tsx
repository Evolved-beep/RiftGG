type SummonerCardProps = {
    rank:any,
    queueType: string

}
const SummonerCard = ({rank,queueType}:SummonerCardProps) => {
if(!rank){
    return (
        <div className='bg-[#151b3b] border border-[#1e2544] rounded-xl p-6 text-center'>
            <p className='text-gray-400'>Unranked</p>
        </div>
    )
}

const winrate = ((rank.wins / (rank.wins + rank.losses)) * 100).toFixed(1);

    return (
        <div className='bg-[#151b3b] border border-[#1e2544] rounded-xl p-6'>
            <h2 className='text-white text-xl font-bold mb-4'>{queueType}</h2>
            <div className='flex items-center gap-6'>
                 <img
                    src={`/assets/images/${rank.tier.toLowerCase()}.webp`}
                    alt={rank.tier}
                    className='w-20 h-20'
                />
                    <div>
                        <p className='text-white text-2xl font-bold'>{rank.tier} {rank.rank}</p>
                        <p className='text-gray-400'>{rank.leaguePoints} LP</p>
                        <p className='text-gray-400'>{rank.wins}W {rank.losses}L ({winrate}% winrate)</p>
                    </div>
            </div>
        </div>
    )
}

export default SummonerCard