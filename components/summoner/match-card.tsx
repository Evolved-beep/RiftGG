type Participant = {
  puuid: string;
  summonerName: string;
  championName: string;
  championId: number;
  kills: number;
  deaths: number;
  assists: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  goldEarned: number;
  champLevel: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  summoner1Id: number;
  summoner2Id: number;
  totalDamageDealtToChampions: number;
};

type MatchCardProps = {
  matchData: any; 
  userPuuid: string; 
};

export default function MatchCard({ matchData, userPuuid }: MatchCardProps) {
  const { info } = matchData;
  const participants = info.participants;

  const blueTeam = participants.filter((p: any) => p.teamId === 100);
  const redTeam = participants.filter((p: any) => p.teamId === 200);
  
  const userPlayer = participants.find((p: any) => p.puuid === userPuuid);
  const userWon = userPlayer?.win;
  
  const minutes = Math.floor(info.gameDuration / 60);
  const seconds = info.gameDuration % 60;
  
  const blueWon = blueTeam[0].win;
  
  return (
    <div className={`rounded-lg border p-4 ${
      userWon 
        ? 'bg-blue-900/20 border-blue-600' 
        : 'bg-red-900/20 border-red-600'
    }`}>
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-700">
        <div>
          <span className="text-sm text-gray-400">Ranked Solo</span>
          <p className="text-xs text-gray-500">{minutes}m {seconds}s</p>
        </div>
        <div className={`px-4 py-2 rounded font-semibold ${
          userWon ? 'bg-blue-600' : 'bg-red-600'
        }`}>
          {userWon ? 'Victory' : 'Defeat'}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className={`text-xs font-semibold mb-2 ${
            blueWon ? 'text-blue-400' : 'text-gray-500'
          }`}>
            {blueWon ? 'Victory' : 'Defeat'} (Blue)
          </div>
          {blueTeam.map((player: any) => (
            <PlayerRow 
              key={player.puuid}
              player={player}
              isUser={player.puuid === userPuuid}
            />
          ))}
        </div>
        
        <div className="space-y-2">
          <div className={`text-xs font-semibold mb-2 ${
            !blueWon ? 'text-red-400' : 'text-gray-500'
          }`}>
            {!blueWon ? 'Victory' : 'Defeat'} (Red)
          </div>
          {redTeam.map((player: any) => (
            <PlayerRow 
              key={player.puuid}
              player={player}
              isUser={player.puuid === userPuuid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlayerRow({ player, isUser }: { player: any; isUser: boolean }) {
  const kda = ((player.kills + player.assists) / Math.max(player.deaths, 1)).toFixed(2);
  const cs = player.totalMinionsKilled + player.neutralMinionsKilled;
  
  return (
    <div className={`flex items-center gap-2 p-2 rounded text-sm ${
      isUser ? 'bg-yellow-900/30 border border-yellow-600' : ''
    }`}>
      <img 
        src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${player.championName}.png`}
        alt={player.championName}
        className="w-8 h-8 rounded"
      />

      <div className="flex flex-col gap-0.5">
        <img 
          src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/spell/Summoner${getSummonerSpellName(player.summoner1Id)}.png`}
          className="w-4 h-4 rounded"
          alt="spell1"
        />
        <img 
          src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/spell/Summoner${getSummonerSpellName(player.summoner2Id)}.png`}
          className="w-4 h-4 rounded"
          alt="spell2"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="truncate font-medium">
          {player.riotIdGameName || player.summonerName}
        </p>
      </div>

      <div className="text-xs text-gray-300">
        {player.kills}/{player.deaths}/{player.assists}
        <p className="text-[10px] text-gray-500">{kda} KDA</p>
      </div>
      
      <div className="flex gap-0.5">
        {[player.item0, player.item1, player.item2, player.item6].map((itemId, idx) => (
          itemId !== 0 ? (
            <img 
              key={idx}
              src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/item/${itemId}.png`}
              className="w-5 h-5 rounded"
              alt={`item${idx}`}
            />
          ) : (
            <div key={idx} className="w-5 h-5 bg-gray-800 rounded" />
          )
        ))}
      </div>
      
      <div className="text-[10px] text-gray-400">
        <p>{cs} CS</p>
        <p>{(player.goldEarned / 1000).toFixed(1)}k</p>
      </div>
    </div>
  );
}

function getSummonerSpellName(spellId: number): string {
  const spells: Record<number, string> = {
    1: 'Boost',      // Cleanse
    3: 'Exhaust',
    4: 'Flash',
    6: 'Haste',      // Ghost
    7: 'Heal',
    11: 'Smite',
    12: 'Teleport',
    14: 'Dot',    // Ignite
    21: 'Barrier',
  };
  return spells[spellId] || 'Flash';
}
