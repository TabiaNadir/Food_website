import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OUR SUPPORT</h3>
            <div className="space-y-2 text-sm">
              <p>Online Support Available</p>
              <p>24/7 Chat & Email</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">NUTRITRACK</h3>
            <div className="space-y-2 text-sm">
              <p>About Us</p>
              <p>Calorie Tracker</p>
              <p>Meal Planner</p>
              <p>Progress Hub</p>
              <p>Resources</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US!</h3>
            <div className="space-y-2 text-sm">
              <p>support@nutritrack.com</p>
              <p>+92-123-456-7890</p>
            </div>
          </div>
          <div>
            <div className="flex space-x-4 mb-4">
              <Facebook className="w-6 h-6 hover:text-emerald-400 cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-emerald-400 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-emerald-400 cursor-pointer" />
            </div>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.3055876875637!2d-73.71566468459394!3d40.63231887934194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24e5b6b7e5f5b%3A0x9b9e8c1f4e5a2b3d!2s12%20Irving%20Pl%2C%20Woodmere%2C%20NY%2011598%2C%20USA!5e0!3m2!1sen!2us!4v1697051234567"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Copyright © 2025 - NutriTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;