
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Register = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12 px-4">
        <div className="container max-w-md">
          <motion.div 
            className="glassmorphism rounded-2xl border border-white/10 p-6 backdrop-blur-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <motion.h6 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Create an Account
              </motion.h6>
            </div>
            
            <motion.form 
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    placeholder="John" 
                    className="border-gray-700  backdrop-blur-sm focus:border-crypto-accent focus:ring-crypto-accent"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    type="text" 
                    placeholder="Doe" 
                    className="border-gray-700  backdrop-blur-sm focus:border-crypto-accent focus:ring-crypto-accent"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="johndoe@example.com" 
                  className="border-gray-700  backdrop-blur-sm focus:border-crypto-accent focus:ring-crypto-accent"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Create a secure password" 
                  className="border-gray-700  backdrop-blur-sm focus:border-crypto-accent focus:ring-crypto-accent"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder="Confirm your password" 
                  className="border-gray-700  backdrop-blur-sm focus:border-crypto-accent focus:ring-crypto-accent"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                  I agree to the{' '}
                  <Link to="/terms" className="text-crypto-accent hover:text-crypto-accent/80">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-crypto-accent hover:text-crypto-accent/80">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-crypto-accent hover:bg-crypto-accent/90 text-white"
              >
                Create Account
              </Button>
              
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="flex-shrink mx-4 text-foreground/60 text-sm">or sign up with</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="border-gray-700 hover:">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="currentColor" />
                  </svg>
                </Button>
                <Button variant="outline" className="border-gray-700 hover:">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.525V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                    <path d="M12 23C14.97 23 17.46 22.015 19.28 20.335L15.725 17.525C14.74 18.195 13.48 18.58 12 18.58C9.13504 18.58 6.70796 16.71 5.84496 14.1H2.17004V16.9999C3.98614 20.6429 7.72201 23 12 23Z" fill="#34A853" />
                    <path d="M5.84496 14.0999C5.62496 13.4499 5.49996 12.7499 5.49996 11.9999C5.49996 11.2499 5.62496 10.5499 5.84496 9.89986V7.00000H2.17004C1.39844 8.79325 0.999819 10.7568 1.00004 12.74C1.00004 14.8 1.43504 16.75 2.17004 18.5L5.84496 14.0999Z" fill="#FBBC05" />
                    <path d="M12 5.42C13.62 5.42 15.06 5.95 16.21 7.05L19.36 3.9C17.4554 2.13362 14.9132 1.12503 12.26 1.14996C7.98204 1.14996 4.24604 3.50696 2.43004 7.14996L6.10504 10.05C6.96804 7.43996 9.39504 5.42 12 5.42Z" fill="#EA4335" />
                  </svg>
                </Button>
                <Button variant="outline" className="border-gray-700 hover:">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2125 0H1.7875C0.8 0 0 0.8 0 1.7875V22.2125C0 23.2 0.8 24 1.7875 24H22.2125C23.2 24 24 23.2 24 22.2125V1.7875C24 0.8 23.2 0 22.2125 0ZM7.1875 20.4H3.5875V8.9875H7.1875V20.4ZM5.3875 7.4C4.2 7.4 3.2375 6.4375 3.2375 5.25C3.2375 4.0625 4.2 3.1 5.3875 3.1C6.575 3.1 7.5375 4.0625 7.5375 5.25C7.5375 6.4375 6.575 7.4 5.3875 7.4ZM20.4 20.4H16.8V14.85C16.8 13.5375 16.8 11.85 15 11.85C13.2 11.85 12.9 13.2875 12.9 14.7625V20.4H9.3V8.9875H12.75V10.5875H12.8C13.2875 9.6625 14.45 8.7 16.1625 8.7C19.8 8.7 20.4 11.0875 20.4 14.1V20.4Z" fill="currentColor" />
                  </svg>
                </Button>
              </div>
            </motion.form>
            
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-foreground/70 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-crypto-accent hover:text-crypto-accent/80 font-medium">
                  Sign in
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
    </div>
  );
};

export default Register;
