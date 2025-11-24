const topPicks = [
  { name: "Ahri", role: "Mid", tier: "S", winrate: "52.3%", image: "Ahri" },
  { name: "Jinx", role: "ADC", tier: "S", winrate: "51.8%", image: "Jinx" },
  { name: "Thresh", role: "Support", tier: "S", winrate: "50.9%", image: "Thresh" },
  { name: "Lee Sin", role: "Jungle", tier: "A", winrate: "50.2%", image: "LeeSin" },
  { name: "Garen", role: "Top", tier: "A", winrate: "51.5%", image: "Garen" },
  { name: "Lux", role: "Support", tier: "A", winrate: "50.7%", image: "Lux" },
  { name: "Yasuo", role: "Mid", tier: "B", winrate: "49.8%", image: "Yasuo" },
  { name: "Darius", role: "Top", tier: "A", winrate: "50.4%", image: "Darius" },
];

export default function TopPicks() {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold text-center mb-8">
          Patch 14.23 Top Picks
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3 px-4 text-sm font-semibold text-gray-400">Champion</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-400">Role</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-400">Tier</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-400">Win Rate</th>
              </tr>
            </thead>
            <tbody>
              {topPicks.map((champ, idx) => (
                <tr 
                  key={idx} 
                  className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${champ.image}.png`}
                        alt={champ.name}
                        className="w-10 h-10 rounded"
                      />
                      <span className="font-medium">{champ.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{champ.role}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      champ.tier === 'S' ? 'bg-yellow-600 text-black' :
                      champ.tier === 'A' ? 'bg-green-600' : 'bg-blue-600'
                    }`}>
                      {champ.tier}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{champ.winrate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
