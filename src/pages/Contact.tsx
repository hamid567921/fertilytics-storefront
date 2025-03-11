
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      console.log('Contact form submitted:', { name, email, subject, message });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "123 Agriculture Way, Farmington, CA 94043",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "contact@fertilytics.com",
      link: "mailto:contact@fertilytics.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8am - 5pm, Sat: 9am - 1pm",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h1>
          
          <div className="max-w-lg mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have questions about our products or need assistance? We're here to help. 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-700 dark:bg-leaf-900 dark:text-leaf-300 mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message here"
                    rows={6}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-leaf-600 hover:bg-leaf-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[400px] lg:h-auto">
              {/* Google Map Embed - Replace with actual Google Maps embed code in production */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Interactive Map Would Be Embedded Here
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
