const Footer = () => {
  return (
    <footer className="border-t border-gray-800 px-6 py-8 bg-black text-center text-gray-400">

      <h2 className="text-lg font-semibold text-green-400 mb-2">
        BestStockbrokerIndia
      </h2>

      <p className="text-sm mb-4">
        Smarter trading platform for modern investors.
      </p>

      {/* Links */}
      <div className="flex justify-center gap-6 text-sm mb-4">
        <a href="#" className="hover:text-green-400">Privacy</a>
        <a href="#" className="hover:text-green-400">Terms</a>
        <a href="#" className="hover:text-green-400">Contact</a>
      </div>

      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} BestStockbrokerIndia. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;  