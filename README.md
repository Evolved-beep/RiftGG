# RiftGG - League of Legends Stats Tracker

A modern League of Legends statistics tracker built with Next.js and the Riot Games API. Search for any summoner and view their ranked stats, mastered champions, and detailed match history.

## 🎯 Features

- 🔍 **Summoner Search** - Search by name and tag (Riot ID)
- 📊 **Ranked Statistics** - Solo/Duo and Flex with rank, LP, and winrate
- 🏆 **Top Champions** - 5 most mastered champions
- 📜 **Match History** - Last 5 matches with all 10 players, KDA, items, CS
- 📱 **Responsive Design** - Mobile, tablet, and desktop friendly
- 🎨 **Modern UI** - OP.GG-inspired interface with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Riot Games API
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

1. Clone the repository

2. Install dependencies

3. Create a `.env.local` file and add your Riot API key

4. Run the development server

5. Open [http://localhost:3000](http://localhost:3000)

## 🔑 Getting a Riot Games API Key

1. Go to [Riot Developer Portal](https://developer.riotgames.com/)
2. Sign in with your Riot account
3. Generate a Development key (valid for 24h) or Production key

## 🎮 Usage

1. Enter a summoner name and tag (e.g., "Hide on bush#KR1")
2. View ranked stats, favorite champions, and match history
3. Explore detailed match information with all 10 players
4. It only works for EUW player !!

## 🔮 Future Improvements

- [ ] Caching system to reduce API calls
- [ ] Dedicated champions page with tier list
- [ ] Leaderboard for top players
- [ ] Summoner comparison feature
- [ ] Progress tracking with graphs

## 📝 Limitations

- Development API key limited to 20 requests/second and 100 requests/2 minutes
- Match history limited to 5 matches to optimize API calls

## 📄 License

This project is for educational/portfolio purposes. League of Legends and all associated elements are trademarks of Riot Games, Inc.

---

