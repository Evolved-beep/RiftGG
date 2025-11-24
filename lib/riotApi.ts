import { NextRequest, NextResponse } from "next/server"

const RIOT_API_KEY = process.env.RIOT_API_KEY
const EUROPE_BASE = "https://europe.api.riotgames.com"
const EUW_PLATFORM = "https://euw1.api.riotgames.com"

export async function getAccountByRiotId(gameName: string, tagLine: string) {
  
  const url = `${EUROPE_BASE}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`

  const response = await fetch(url, {
    headers: {
      "X-Riot-Token": RIOT_API_KEY!
    }
  })
  
  const data = await response.text()
  if (!response.ok) {
    throw new Error(`Account not found (${response.status})`)
  }

  return JSON.parse(data)
}


export async function getSummonerByPuuid(puuid: string) {

  const url = `${EUW_PLATFORM}/lol/summoner/v4/summoners/by-puuid/${puuid}`
  const response = await fetch(url, {
    headers: {
      "X-Riot-Token": RIOT_API_KEY!
    }
  })

  const data = await response.text()
  if (!response.ok) {
    throw new Error(`Summoner not found (${response.status})`)
  }
  return JSON.parse(data)
}

export async function getRankedByPuuid(puuid: string) {
  const url = `${EUW_PLATFORM}/lol/league/v4/entries/by-puuid/${puuid}`
  const response = await fetch(url, {
    headers: {
      "X-Riot-Token": RIOT_API_KEY!
    }
  })
  const data = await response.text()
  if (!response.ok) {
    throw new Error(`Ranked data not found (${response.status})`)
  }
  return JSON.parse(data)
}

export async function getChampionMastery(puuid:string, count= 5){
  const url = `${EUW_PLATFORM}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?count=${count}` 
  const response = await fetch(url, {
    headers:{
      'X-Riot-Token': RIOT_API_KEY!
    }
  })
  if(!response.ok){
    throw new Error(`Champion Mastery data not found (${response.status})`)
  }
  const data = await response.json()
  return data
 
}


export async function getMatchIds(puuid:string, count=5){
  const url = `${EUROPE_BASE}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}`

  const response = await fetch(url, {
    headers:{
      'X-Riot-Token': RIOT_API_KEY!
    }
  })
  if(!response.ok){
    throw new Error(`Match IDs not found`)
  }

  const matchIds = await response.json()
  return matchIds
}

export async function getMatchDetails(matchId: string) {
  const url = `${EUROPE_BASE}/lol/match/v5/matches/${matchId}`;
  
  const response = await fetch(url, {
    headers: {
      'X-Riot-Token': RIOT_API_KEY!
    }
  });
  
  if (!response.ok) {
    throw new Error(`Match details not found for ${matchId}`);
  }
  
  const matchData = await response.json();
  return matchData;
}

export async function getFullMatchHistory(puuid: string, count = 5) {
  const matchIds = await getMatchIds(puuid, count);
  
  const matchesDetails = await Promise.all(
    matchIds.map((id: string) => getMatchDetails(id))
  );
  
  return matchesDetails;
}