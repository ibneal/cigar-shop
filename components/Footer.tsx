import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import siteConfig from '@/data/siteConfig.json';

export default function Footer() {
  const { businessInfo } = siteConfig;

  return (
    <footer className="bg-gray-100 mt-16">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={businessInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href={businessInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center text-sm text-gray-600 space-y-2">
          <p className="font-semibold text-gray-900 uppercase tracking-wide">
            {businessInfo.name}
          </p>
          <p>
            {businessInfo.address.fullAddress}
          </p>
          <p>
            <a href={`tel:${businessInfo.contact.phone}`} className="hover:text-gray-900">
              {businessInfo.contact.phone}
            </a>
            {' · '}
            <a href={`mailto:${businessInfo.contact.email}`} className="hover:text-gray-900">
              {businessInfo.contact.email}
            </a>
          </p>
        </div>

        {/* Newsletter Subscription
        <div className="mt-8 flex justify-center">
          <form className="flex gap-2 max-w-md w-full">
            <input
              type="email"
              placeholder="Subscribe to continue editing your site"
              className="flex-1 rounded-md border-gray-300 px-4 py-2 text-sm focus:border-gray-900 focus:ring-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div> */}

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

