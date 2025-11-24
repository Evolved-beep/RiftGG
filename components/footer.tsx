export default function Footer() {
  return (
    <footer className="bg-[#050814] border-t border-[#1E2544] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} RiftGG. All rights reserved.</p>
        <p className="mt-2 text-xs">
          RiftGG isn't endorsed by Riot Games.
        </p>
      </div>
    </footer>
  )
}
