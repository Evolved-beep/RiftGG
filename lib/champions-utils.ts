export async function mapChampionIds(masteryData: any[]) {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json'
  )
  const { data } = await response.json()

  const idToChamp: Record<string, any> = {}
  Object.values(data).forEach((champ: any) => {
    idToChamp[champ.key] = champ
  })


  return masteryData.map((mastery) => {
    const championData = idToChamp[mastery.championId.toString()]
    return {
        ...mastery,
        championName: championData?.name || "Unknown",
        imageId: championData?.id || null,
    }
  })
}
