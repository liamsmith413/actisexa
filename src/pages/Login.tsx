
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
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
                Welcome Back
              </motion.h6>
              <motion.p 
                className="text-foreground/70"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Sign in to your account to continue
              </motion.p>
            </div>
            
            <motion.form 
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  className="border-gray-700 bg-gray-800/50 backdrop-blur-sm focus:border-crypto-accent focus:ring-crypto-accent"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-crypto-accent hover:text-crypto-accent/80">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  className="border-gray-700 bg-gray-800/50 backdrop-blur-sm focus:border-crypto-accent focus:ring-crypto-accent"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">Remember me</Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-crypto-accent hover:bg-crypto-accent/90 text-white"
              >
                Sign In
              </Button>
              
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="flex-shrink mx-4 text-foreground/60 text-sm">or continue with</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800/50">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="currentColor" />
                  </svg>
                </Button>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800/50">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.525V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                    <path d="M12 23C14.97 23 17.46 22.015 19.28 20.335L15.725 17.525C14.74 18.195 13.48 18.58 12 18.58C9.13504 18.58 6.70796 16.71 5.84496 14.1H2.17004V16.9999C3.98614 20.6429 7.72201 23 12 23Z" fill="#34A853" />
                    <path d="M5.84496 14.0999C5.62496 13.4499 5.49996 12.7499 5.49996 11.9999C5.49996 11.2499 5.62496 10.5499 5.84496 9.89986V7.00000H2.17004C1.39844 8.79325 0.999819 10.7568 1.00004 12.74C1.00004 14.8 1.43504 16.75 2.17004 18.5L5.84496 14.0999Z" fill="#FBBC05" />
                    <path d="M12 5.42C13.62 5.42 15.06 5.95 16.21 7.05L19.36 3.9C17.4554 2.13362 14.9132 1.12503 12.26 1.14996C7.98204 1.14996 4.24604 3.50696 2.43004 7.14996L6.10504 10.05C6.96804 7.43996 9.39504 5.42 12 5.42Z" fill="#EA4335" />
                  </svg>
                </Button>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800/50">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6 5.82C15.35 5.82 14.2 6.39 13.55 7.45C12.95 6.39 11.75 5.82 10.55 5.82C8.35 5.82 6.55 7.62 6.55 9.82C6.55 12.56 9.35 15.32 13.55 18.72C17.75 15.32 20.55 12.56 20.55 9.82C20.55 7.62 18.8 5.82 16.6 5.82Z" fill="currentColor" />
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
                Don't have an account?{' '}
                <Link to="/register" className="text-crypto-accent hover:text-crypto-accent/80 font-medium">
                  Sign up
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
    </div>
  );
};

export default Login;
