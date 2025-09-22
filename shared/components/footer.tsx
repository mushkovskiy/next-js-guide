const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm">© 2025 Tennis Store. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-gray-700 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-700 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-gray-700 cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
