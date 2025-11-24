import MatchCard from "./match-card";

type MatchHistoryListProps = {
  matches: any[];
  userPuuid: string;
};

export default function MatchHistoryList({ matches, userPuuid }: MatchHistoryListProps) {
  if (!matches || matches.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        No recent matches found
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Match History</h2>
      {matches.map((match) => (
        <MatchCard
          key={match.metadata.matchId}
          matchData={match}
          userPuuid={userPuuid}
        />
      ))}
    </div>
  );
}
