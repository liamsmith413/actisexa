import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import BottomNavigation from '../components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Wallet = () => {
  const cryptoAssets = [
    { id: 'usdt', name: 'USDT', symbol: '₮', balance: '0', change: '+$0' },
    { id: 'btc', name: 'BTC', symbol: '₿', balance: '0', change: '+$0' },
    { id: 'bch', name: 'BCH', symbol: 'BCH', balance: '0', change: '+$0' },
    { id: 'etc', name: 'ETC', symbol: 'ETC', balance: '0', change: '+$0' },
    { id: 'eos', name: 'EOS', symbol: 'EOS', balance: '0', change: '+$0' },
    { id: 'bnb', name: 'BNB', symbol: 'BNB', balance: '0', change: '+$0' },
    { id: 'dot', name: 'DOT', symbol: 'DOT', balance: '0', change: '+$0' },
    { id: 'apt', name: 'APT', symbol: 'APT', balance: '0', change: '+$0' },
    { id: 'sol', name: 'SOL', symbol: 'SOL', balance: '0', change: '+$0' },
    { id: 'ftm', name: 'FTM', symbol: 'FTM', balance: '0', change: '+$0' },
    { id: 'op', name: 'OP', symbol: 'OP', balance: '0', change: '+$0' },
    { id: 'ldo', name: 'LDO', symbol: 'LDO', balance: '0', change: '+$0' },
    { id: 'grt', name: 'GRT', symbol: 'GRT', balance: '0', change: '+$0' },
    { id: 'doge', name: 'DOGE', symbol: 'Ð', balance: '0', change: '+$0' },
    { id: 'ada', name: 'ADA', symbol: 'ADA', balance: '0', change: '+$0' },
    { id: 'mina', name: 'MINA', symbol: 'MINA', balance: '0', change: '+$0' },
    { id: 'sand', name: 'SAND', symbol: 'SAND', balance: '0', change: '+$0' },
    { id: 'avax', name: 'AVAX', symbol: 'AVAX', balance: '0', change: '+$0' },
    { id: 'near', name: 'NEAR', symbol: 'NEAR', balance: '0', change: '+$0' },
    { id: 'link', name: 'LINK', symbol: 'LINK', balance: '0', change: '+$0' },
    { id: 'atom', name: 'ATOM', symbol: 'ATOM', balance: '0', change: '+$0' },
    { id: 'imx', name: 'IMX', symbol: 'IMX', balance: '0', change: '+$0' },
    { id: 'fil', name: 'FIL', symbol: 'FIL', balance: '0', change: '+$0' },
    { id: 'chz', name: 'CHZ', symbol: 'CHZ', balance: '0', change: '+$0' },
    { id: 'mana', name: 'MANA', symbol: 'MANA', balance: '0', change: '+$0' },
    { id: 'xmr', name: 'XMR', symbol: 'XMR', balance: '0', change: '+$0' },
    { id: 'eth', name: 'ETH', symbol: 'Ξ', balance: '0', change: '+$0' },
    { id: 'ltc', name: 'LTC', symbol: 'Ł', balance: '0', change: '+$0' },
    { id: 'trx', name: 'TRX', symbol: 'TRX', balance: '0', change: '+$0' },
    { id: 'pam', name: 'PAM', symbol: 'PAM', balance: '0', change: '+$0' },
    { id: 'hhl', name: 'HHL', symbol: 'HHL', balance: '0', change: '+$0' },
    { id: 'unr', name: 'UNR', symbol: 'UNR', balance: '0', change: '+$0' },
    { id: 'wld', name: 'WLD', symbol: 'WLD', balance: '0', change: '+$0' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <main className="pt-20 pb-16">
        <div className="w-full px-4">
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-crypto-accent w-full rounded-lg p-3 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-sm text-white/70 mb-1">Total Assets (USDT)</h2>
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-xs text-white/70 mt-1">≈$0</div>
              </div>
              <Button className="bg-white/20 hover:bg-white/30 text-white rounded-md text-sm">
                <Link to="/History"><svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg></Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-crypto-accent w-full rounded-lg p-3 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <h3 className="text-xs text-white/70 mb-1">Spot (USDT)</h3>
                <div className="text-base font-medium text-white">0</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <h3 className="text-xs text-white/70 mb-1">Portfolio (USDT)</h3>
                <div className="text-base font-medium text-white">0</div>
              </div>
            </div>

            <div className="bg-white/10 hover:bg-white/20 rounded-lg p-1 mt-2 text-center flex items-center justify-center">
              <h3 className="text-xs text-white/70 mb-1" style={{ cursor: "pointer" }}>View details</h3>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-crypto-accent w-full rounded-lg p-3 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-3 gap-4 mt-1">
              <Button className="bg-white/10 hover:bg-white/20 text-white rounded-lg flex flex-col items-center py-3 h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
                <Link to="/Recharge" className="text-xs">Recharge</Link>
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white rounded-lg flex flex-col items-center py-3 h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
                </svg>
                <Link to="/Withdrawals" className="text-xs">Withdrawals</Link>
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white rounded-lg flex flex-col items-center py-3 h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="18" r="3" />
                  <path d="M6 9v12M18 6V3" />
                  <path d="m9 6 6 6M6 9l12-3" />
                </svg>
                <Link to="/Exchanges" className="text-xs">Exchange</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="overflow-hidden">
              {cryptoAssets.map((asset, index) => (
                <motion.div
                  key={asset.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.02, duration: 0.3 }}
                  className="flex justify-between items-center border-b border-gray-700/10 py-2"
                >
                  <div className="flex items-center">
                    <div className="mr-1 w-8 h-8 flex items-center justify-center rounded-full bg-crypto-accent/10">
                      {renderCryptoIcon(asset.id, asset.symbol)}
                    </div>
                    <div>
                      <div className="font-medium">{asset.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{asset.balance}</div>
                    <div className="text-xs text-foreground/60">{asset.change}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

// Helper function to render crypto icons
const renderCryptoIcon = (id: string, symbol: string) => {
  // Specific icons for popular cryptos
  if (id === 'btc') {
    return <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs">₿</div>;
  }
  if (id === 'eth') {
    return <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-xs">Ξ</div>;
  }
  if (id === 'usdt') {
    return <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs">₮</div>;
  }

  // Default icon for other currencies
  return <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xs">{symbol.charAt(0)}</div>;
};

export default Wallet;
