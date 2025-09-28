import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Tennis racket icon with 404 */}
        <div className="relative">
          <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-24 border-4 border-gray-400 rounded-full relative">
              <div className="absolute inset-2 border-2 border-gray-400 rounded-full"></div>
              <div className="absolute inset-4 border border-gray-400 rounded-full"></div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Error message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            The racket you're looking for seems to have gone out of bounds. 
            Don't worry, let's get you back to the court!
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Return to Home Court
          </Link>
          
          <div className="flex gap-3">
            <Link 
              href="/rackets"
              className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg border border-gray-300 transition-colors duration-200 text-sm"
            >
              Browse Rackets
            </Link>
            <Link 
              href="/rackets/top-10"
              className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg border border-gray-300 transition-colors duration-200 text-sm"
            >
              Top 10 Rackets
            </Link>
          </div>
        </div>

        {/* Helpful tips */}
        <div className="text-sm text-gray-500 space-y-2 pt-4 border-t border-gray-200">
          <p className="font-medium">What you can do:</p>
          <ul className="space-y-1 text-left">
            <li>• Check the URL for typos</li>
            <li>• Go back to the previous page</li>
            <li>• Visit our homepage to start fresh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
