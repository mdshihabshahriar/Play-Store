const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 pt-12 pb-6 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-white text-xl font-bold mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">▲</div>
            AppStore
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Discover the best apps, games, and more. Your one-stop destination for all your favorite Play Store apps.
          </p>
          <div className="flex gap-3 flex-wrap">
            <div className="flex items-center gap-2 bg-[#2d2d44] border border-[#3d3d5c] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#3a3a58] transition">
              <span className="text-xl">🤖</span>
              <div>
                <p className="text-[10px] text-gray-400">Get it on</p>
                <p className="text-sm font-medium text-white">Google Play</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#2d2d44] border border-[#3d3d5c] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#3a3a58] transition">
              <span className="text-xl">🍎</span>
              <div>
                <p className="text-[10px] text-gray-400">Download on the</p>
                <p className="text-sm font-medium text-white">App Store</p>
              </div>
            </div>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-xs font-medium text-white uppercase tracking-widest mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['Trending Apps','Top Games','New Arrivals','Categories',"Editor's Choice"].map(item => (
              <li key={item}><a href="#" className="hover:text-purple-400 transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-medium text-white uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['About Us','Blog','Careers','Press','Contact'].map(item => (
              <li key={item}><a href="#" className="hover:text-purple-400 transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xs font-medium text-white uppercase tracking-widest mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['Help Center','Privacy Policy','Terms of Service','Cookie Policy','Report an Issue'].map(item => (
              <li key={item}><a href="#" className="hover:text-purple-400 transition">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="max-w-6xl mx-auto my-8 border-[#2d2d44]" />

      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <p className="text-xs text-gray-500">© 2026 AppStore. All rights reserved.</p>
        <div className="flex gap-2">
          {['f','𝕏','✦','▶'].map((icon, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-[#2d2d44] border border-[#3d3d5c] flex items-center justify-center cursor-pointer hover:bg-purple-700 transition text-sm">
              {icon}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500">Made By Shihab</p>
      </div>
    </footer>
  );
};

export default Footer;