
import React from 'react';
import { motion } from 'framer-motion';

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: number;
  icon: string;
}

// Mock data for different categories
const cryptoData = {
  digital: [
    { id: 'btc', name: 'BTC', symbol: '₿', price: '87005.0859', change: 1.31, icon: '/crypto-icons/btc.svg' },
    { id: 'eth', name: 'ETH', symbol: 'Ξ', price: '2174.5173', change: 1.32, icon: '/crypto-icons/eth.svg' },
    { id: 'ltc', name: 'LTC', symbol: 'Ł', price: '102.7808', change: -2.70, icon: '/crypto-icons/ltc.svg' },
    { id: 'bnb', name: 'BNB', symbol: 'BNB', price: '589.4561', change: 4.33, icon: '/crypto-icons/bnb.svg' },
    { id: 'trx', name: 'TRX', symbol: 'TRX', price: '0.2417', change: 3.25, icon: '/crypto-icons/trx.svg' },
    { id: 'eos', name: 'EOS', symbol: 'EOS', price: '0.5326', change: -1.74, icon: '/crypto-icons/eos.svg' },
    { id: 'doge', name: 'DOGE', symbol: 'Ð', price: '0.1979', change: 2.00, icon: '/crypto-icons/doge.svg' },
    { id: 'bch', name: 'BCH', symbol: 'BCH', price: '344.3065', change: 10.89, icon: '/crypto-icons/bch.svg' },
    { id: 'pam', name: 'PAM', symbol: 'PAM', price: '55.4236', change: 3.10, icon: '/crypto-icons/pam.svg' },
    { id: 'etc', name: 'ETC', symbol: 'ETC', price: '18.9886', change: 2.21, icon: '/crypto-icons/etc.svg' },
    { id: 'unr', name: 'UNR', symbol: 'UNR', price: '0.2052', change: -2.31, icon: '/crypto-icons/unr.svg' },
    { id: 'sol', name: 'SOL', symbol: 'SOL', price: '141.7550', change: 2.65, icon: '/crypto-icons/sol.svg' },
    { id: 'ftm', name: 'FTM', symbol: 'FTM', price: '0.6993', change: -2.10, icon: '/crypto-icons/ftm.svg' },
    { id: 'apt', name: 'APT', symbol: 'APT', price: '5.4684', change: -0.73, icon: '/crypto-icons/apt.svg' },
    { id: 'op', name: 'OP', symbol: 'OP', price: '0.9383', change: -2.80, icon: '/crypto-icons/op.svg' },
    { id: 'ldo', name: 'LDO', symbol: 'LDO', price: '1.1073', change: 4.34, icon: '/crypto-icons/ldo.svg' },
    { id: 'grt', name: 'GRT', symbol: 'GRT', price: '0.1052', change: -0.28, icon: '/crypto-icons/grt.svg' },
    { id: 'hhl', name: 'HHL', symbol: 'HHL', price: '0.9115', change: 3.12, icon: '/crypto-icons/hhl.svg' },
    { id: 'ada', name: 'ADA', symbol: 'ADA', price: '0.9258', change: 12.05, icon: '/crypto-icons/ada.svg' },
    { id: 'mina', name: 'MINA', symbol: 'MINA', price: '0.2866', change: 1.09, icon: '/crypto-icons/mina.svg' },
    { id: 'sand', name: 'SAND', symbol: 'SAND', price: '0.2999', change: 1.35, icon: '/crypto-icons/sand.svg' },
    { id: 'avax', name: 'AVAX', symbol: 'AVAX', price: '19.9379', change: -1.58, icon: '/crypto-icons/avax.svg' },
    { id: 'dot', name: 'DOT', symbol: 'DOT', price: '4.2956', change: -0.58, icon: '/crypto-icons/dot.svg' },
    { id: 'near', name: 'NEAR', symbol: 'NEAR', price: '2.8198', change: -0.74, icon: '/crypto-icons/near.svg' },
    { id: 'atom', name: 'ATOM', symbol: 'ATOM', price: '4.1308', change: -0.36, icon: '/crypto-icons/atom.svg' },
    { id: 'link', name: 'LINK', symbol: 'LINK', price: '14.9780', change: 6.48, icon: '/crypto-icons/link.svg' },
    { id: 'imx', name: 'IMX', symbol: 'IMX', price: '0.6127', change: -0.65, icon: '/crypto-icons/imx.svg' },
    { id: 'fil', name: 'FIL', symbol: 'FIL', price: '2.9990', change: -0.37, icon: '/crypto-icons/fil.svg' },
    { id: 'chz', name: 'CHZ', symbol: 'CHZ', price: '0.0470', change: 1.95, icon: '/crypto-icons/chz.svg' },
    { id: 'mana', name: 'MANA', symbol: 'MANA', price: '0.2742', change: 1.52, icon: '/crypto-icons/mana.svg' },
    { id: 'wld', name: 'WLD', symbol: 'WLD', price: '0.9600', change: -4.67, icon: '/crypto-icons/wld.svg' }
  ],
  forex: [
    { id: 'gbpusd', name: 'GBPUSD', symbol: '£/$', price: '1.2783', change: 0.72, icon: '/forex-icons/gbp.svg' },
    { id: 'eurusd', name: 'EURUSD', symbol: '€/$', price: '1.0623', change: 1.34, icon: '/forex-icons/eur.svg' },
    { id: 'audusd', name: 'AUDUSD', symbol: 'A$/$', price: '0.6272', change: 0.77, icon: '/forex-icons/aud.svg' },
    { id: 'jpyusd', name: 'JPYUSD', symbol: '¥/$', price: '0.0067', change: -0.21, icon: '/forex-icons/jpy.svg' },
    { id: 'nzdusd', name: 'NZDUSD', symbol: 'NZ$/$', price: '0.5633', change: 0.87, icon: '/forex-icons/nzd.svg' },
    { id: 'thbusd', name: 'THBUSD', symbol: '฿/$', price: '0.0299', change: 1.43, icon: '/forex-icons/thb.svg' },
    { id: 'krwusd', name: 'KRWUSD', symbol: '₩/$', price: '0.0007', change: 0.33, icon: '/forex-icons/krw.svg' },
    { id: 'cnyusd', name: 'CNYUSD', symbol: '¥/$', price: '0.1376', change: 0.32, icon: '/forex-icons/cny.svg' },
    { id: 'cadusd', name: 'CADUSD', symbol: 'C$/$', price: '0.6951', change: 0.63, icon: '/forex-icons/cad.svg' },
    { id: 'sgdusd', name: 'SGDUSD', symbol: 'S$/$', price: '0.7470', change: 0.67, icon: '/forex-icons/sgd.svg' }
  ],
  precious: [
    { id: 'xau', name: 'XAU', symbol: 'XAU', price: '2911.0055', change: -0.22, icon: '/metal-icons/gold.svg' },
    { id: 'xpd', name: 'XPD', symbol: 'XPD', price: '948.2474', change: 1.24, icon: '/metal-icons/palladium.svg' },
    { id: 'xag', name: 'XAG', symbol: 'XAG', price: '32.0116', change: 0.16, icon: '/metal-icons/silver.svg' },
    { id: 'xap', name: 'XAP', symbol: 'XAP', price: '961.0819', change: 0.53, icon: '/metal-icons/platinum.svg' },
    { id: 'gt', name: 'GT', symbol: 'GT', price: '27038.3537', change: -0.19, icon: '/metal-icons/gold.svg' },
    { id: 'twgd', name: 'TWGD', symbol: 'TWGD', price: '115069.2460', change: -0.50, icon: '/metal-icons/gold.svg' }
  ],
  index: [
    { id: 'djia', name: 'DJIA', symbol: 'DJIA', price: '42535.9749', change: -1.54, icon: '/index-icons/dow.svg' },
    { id: 'spx', name: 'SPX', symbol: 'S&P', price: '5776.6779', change: -1.20, icon: '/index-icons/sp500.svg' },
    { id: 'ndx', name: 'NDX', symbol: 'NDX', price: '18275.6568', change: -0.35, icon: '/index-icons/nasdaq.svg' }
  ],
  futures: [
    { id: 'au', name: 'AU', symbol: 'AU', price: '2918.9971', change: 0.02, icon: '/futures-icons/gold.svg' },
    { id: 'ag', name: 'AG', symbol: 'AG', price: '32.3887', change: 0.62, icon: '/futures-icons/silver.svg' },
    { id: 'cu', name: 'CU', symbol: 'CU', price: '4.5553', change: 1.66, icon: '/futures-icons/copper.svg' },
    { id: 'pa', name: 'PA', symbol: 'PA', price: '955.9999', change: 0.42, icon: '/futures-icons/platinum.svg' },
    { id: 'wti', name: 'WTI', symbol: 'WTI', price: '68.2191', change: -0.81, icon: '/futures-icons/oil.svg' },
    { id: 'brent', name: 'BRENT', symbol: 'BRENT', price: '71.0400', change: -0.27, icon: '/futures-icons/oil.svg' },
    { id: 'pt', name: 'PT', symbol: 'PT', price: '971.5999', change: 0.10, icon: '/futures-icons/platinum.svg' },
    { id: 'hsi', name: 'HSI', symbol: 'HSI', price: '22887.9979', change: 1.85, icon: '/futures-icons/index.svg' }
  ]
};

interface CryptoTableProps {
  category: string;
}

const CryptoTable: React.FC<CryptoTableProps> = ({ category }) => {
  // Get the correct data based on category
  const data = cryptoData[category as keyof typeof cryptoData] || cryptoData.digital;

  return (
    <div className="bg-background">
      {data.map((crypto, index) => (
        <motion.div
          key={crypto.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03, duration: 0.3 }}
          className="grid grid-cols-3 border-b border-gray-700/10 px-4 py-4"
        >
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="mr-3 w-8 h-8 flex items-center justify-center">
                {renderCryptoIcon(crypto.id, crypto.symbol)}
              </div>
              <div>
                <div className="font-medium">{crypto.name}</div>
                <div className="text-xs text-foreground/60">{crypto.id.toUpperCase()}</div>
              </div>
            </div>
          </div>
          <div className="text-right self-center font-medium">{crypto.price}</div>
          <div className={`text-right self-center font-medium ${crypto.change >= 0 ? 'text-crypto-positive' : 'text-crypto-negative'}`}>
            <span className="px-3 py-1 rounded-md text-white text-sm" style={{ 
              backgroundColor: crypto.change >= 0 ? '#34d399' : '#ef4444'
            }}>
              {crypto.change >= 0 ? '+' : ''}{crypto.change}%
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Helper function to render crypto icons
const renderCryptoIcon = (id: string, symbol: string) => {
  // Digital currency icons
  if (id === 'btc') {
    return <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">₿</div>;
  }
  if (id === 'eth') {
    return <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">Ξ</div>;
  }
  if (id === 'ltc') {
    return <div className="w-8 h-8 rounded-full bg-gray-500/20 flex items-center justify-center text-gray-300">Ł</div>;
  }
  if (id === 'bnb') {
    return <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">B</div>;
  }
  
  // Forex icons
  if (id === 'gbpusd' || id === 'eurusd' || id === 'audusd' || id === 'jpyusd') {
    return <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-700/30">
      <img src={`https://flagsapi.com/${id.substring(0, 2).toUpperCase()}/flat/64.png`} alt={id} className="w-full h-full object-cover" />
    </div>;
  }
  
  // Precious metals
  if (id === 'xau' || id === 'gt') {
    return <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">Au</div>;
  }
  if (id === 'xag') {
    return <div className="w-8 h-8 rounded-full bg-gray-400/20 flex items-center justify-center text-gray-400">Ag</div>;
  }
  
  // Index icons
  if (id === 'djia') {
    return <div className="w-8 h-8 rounded-full overflow-hidden">
      <img src="https://flagsapi.com/US/flat/64.png" alt="US" className="w-full h-full object-cover" />
    </div>;
  }
  if (id === 'spx') {
    return <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">500</div>;
  }
  
  // Default icon for other currencies
  return <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">{symbol.charAt(0)}</div>;
};

export default CryptoTable;
