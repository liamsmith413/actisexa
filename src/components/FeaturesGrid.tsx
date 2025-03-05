
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 'recharge',
    icon: <img src="/uploads/recharge.png" alt="png" className='image' />,
    title: 'Recharge',
    path: '/recharge'
  },
  {
    id: 'invite',
    icon: <img src="/uploads/invite.png" alt="png" className='image' />,
    title: 'Invite',
    path: '/invite'
  },
  {
    id: 'online',
    icon: <img src="/uploads/online.png" alt="png" className='image' />,
    title: 'Online',
    path: '/online'
  },
  {
    id: 'mining',
    icon: <img src="/uploads/mining_pool.png" alt="png" className='image' />,
    title: 'Mining Pool',
    path: '/mining'
  },
  {
    id: 'quantify',
    icon: <img src="/uploads/quantify.png" alt="png" className='image' />,
    title: 'Quantify',
    path: '/quantify'
  },
  {
    id: 'arbitrage',
    icon: <img src="/uploads/arbitrage.png" alt="png" className='image' />,
    title: 'Arbitrage',
    path: '/arbitrage'
  },
  {
    id: 'loan',
    icon: <img src="/uploads/loan.png" alt="png" className='image' />,
    title: 'Loan',
    path: '/loan'
  },
  {
    id: 'debt',
    icon: <img src="/uploads/debt.png" alt="png" className='image' />,
    title: 'Debt',
    path: '/debt'
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link to={feature.path} className="h-full">
        <div className="h-full glassmorphism rounded-xl flex flex-col items-center text-center transition-all duration-300 border border-white/10 hover:border-crypto-accent/30 hover:shadow-glow-blue">
          {/* <div className="w-2 h-10 mb-1 flex items-center justify-center text-2xl rounded-full bg-gradient-to-r backdrop-blur-sm transition-all duration-300"> */}
          {feature.icon}
          {/* </div> */}
          <p className="mb-1 font-size-color group-hover:text-crypto-accent transition-all duration-300">{feature.title}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturesGrid = () => {
  return (
    <section className="py-5 relative overflow-hidden">
      <div className="container px-4 md:px-3">
        <div className="grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-2">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
