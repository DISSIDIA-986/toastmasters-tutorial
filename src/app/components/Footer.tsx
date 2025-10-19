export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-2">© 2024 Toastmasters Tutorial</p>
          <p className="text-gray-400 text-sm">
            This website is designed to help members better understand Toastmasters International
          </p>
          <div className="mt-4">
            <a
              href="https://www.toastmasters.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              Visit Official Website →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}