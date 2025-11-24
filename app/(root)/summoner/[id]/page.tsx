import { getAccountByRiotId, getChampionMastery, getFullMatchHistory, getRankedByPuuid, getSummonerByPuuid } from '@/app/api/summoner/route';
import MatchHistoryList from '@/components/summoner/match-history-list';
import SummonerCard from '@/components/summoner/summoner-card';
import SummonerHeader from '@/components/summoner/summoner-header';
import TopChampions from '@/components/summoner/top-champion';
import { mapChampionIds } from '@/lib/champions-utils';

const SummonersBySearch = async ({ params }: { params: Promise<{ id: string }> }) => {
    try {
        const { id } = await params;
        const [encodedName, encodedTag] = id.split('%23');
        const gameName = decodeURIComponent(encodedName);
        const tagLine = decodeURIComponent(encodedTag);
        const account = await getAccountByRiotId(gameName, tagLine);
        const summoner = await getSummonerByPuuid(account.puuid);
        const ranked = await getRankedByPuuid(summoner.puuid);
        const championMateries = await getChampionMastery(account.puuid,5);
        const topChampions = await mapChampionIds(championMateries);
        const matchHistory = await getFullMatchHistory(account.puuid, 5)

        const rankedSolo = ranked.find((r: any) => r.queueType === 'RANKED_SOLO_5x5');
        const rankedFlex = ranked.find((r:any) => r.queueType === 'RANKED_FLEX_SR');

       return (
            <section className='min-h-screen py-20'>
                <div className='max-w-7xl mx-auto px-6'>
                    <SummonerHeader 
                        gameName={account.gameName} 
                        tagLine={account.tagLine} 
                        profileIconId={summoner.profileIconId} 
                        summonerLevel={summoner.summonerLevel}  />
                        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <SummonerCard rank={rankedSolo} queueType="Ranked Solo / Duo"/>
                            <SummonerCard rank={rankedFlex} queueType="Ranked flex" />
                        </div>
                        <div className='mt-6'>
                            <TopChampions champions={topChampions} />
                        </div>
                         <div className='mt-6'>
                            <MatchHistoryList 
                                matches={matchHistory} 
                                userPuuid={account.puuid}
                            />
        </div>
                    </div>
            </section>
        )
    } catch (error) {
        return (
           <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-400">Summoner not found</p>
            </div>
        )
    }
}


export default SummonersBySearch
