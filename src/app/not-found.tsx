import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050508] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 text-2xl font-bold">
        404
      </div>
      <h1 className="font-display text-3xl font-bold mb-3">Page Not Found</h1>
      <p className="text-zinc-400 text-sm max-w-sm mb-6">
        The page you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide hover:bg-zinc-200 transition-all"
      >
        Return to Home
      </Link>
    </div>
  )
}
