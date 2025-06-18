import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'; 

export function ContactInfo() {
  return (
    <Card className="shadow-lg h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <Mail className="text-primary" size={24} />
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-400 hover:underline">
              your.email@example.com
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Phone className="text-primary" size={24} />
          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:underline">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <MapPin className="text-primary" size={24} />
          <div>
            <h3 className="text-lg font-medium">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">Seoul, South Korea</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium mb-3">Find me on</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Github size={30} />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}