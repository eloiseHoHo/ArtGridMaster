import { Helmet } from "react-helmet";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - PhotoGrid.space</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Page not found</h2>
        <p className="text-gray-500 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
            Back to home
          </a>
        </Link>
      </div>
    </>
  );
}
