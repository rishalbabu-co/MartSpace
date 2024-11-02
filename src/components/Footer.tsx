import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About MartSpace</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/company/about" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/company/join-sales" className="hover:text-white">Join Sales</Link>
              </li>
              <li>
                <Link to="/company/success-stories" className="hover:text-white">Success Stories</Link>
              </li>
              <li>
                <Link to="/company/press" className="hover:text-white">Press Section</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support/customer-support" className="hover:text-white">Customer Support</Link>
              </li>
              <li>
                <Link to="/support/feedback" className="hover:text-white">Feedback</Link>
              </li>
              <li>
                <Link to="/support/complaints" className="hover:text-white">Complaints</Link>
              </li>
              <li>
                <Link to="/support/safety-tips" className="hover:text-white">Safety Tips</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/terms" className="hover:text-white">Terms of Use</Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/legal/cookies" className="hover:text-white">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/legal/disclaimer" className="hover:text-white">Disclaimer</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-white" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-white" />
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-white" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-white" />
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates and exclusive offers
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© 2024 MartSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}