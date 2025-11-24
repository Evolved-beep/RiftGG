type TopChampionsProps = {
  champions: any[]
}

const TopChampions = ({ champions }: TopChampionsProps) => {
  return (
    <div>
      <h2 className='text-white text-2xl font-bold mb-4'>Top Champions</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {champions.map((champ: any) => (
          <div
            key={champ.championId}
            className='bg-[#151B3B] border border-[#1e2544] rounded-xl p-4 text-center hover:border-[#5B8DEE] transition'
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${champ.imageId}.png`}
              alt={champ.championName}
              className='w-20 h-20 rounded-full mx-auto mb-3 border-2 border-[#5B8DEE]'
            />
            <p className='text-white font-bold text-lg'>{champ.championName}</p>
            <p className='text-gray-400 text-sm'>Level {champ.championLevel}</p>
            <p className='text-[#5B8DEE] font-bold mt-2'>
              {champ.championPoints.toLocaleString()} pts
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopChampions
