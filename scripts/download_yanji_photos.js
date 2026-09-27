const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'images');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const images = [
  {
    name: 'spot_yj_univ.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Yanbian_University_2.jpg/960px-Yanbian_University_2.jpg',
    fallback: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=960&q=80'
  },
  {
    name: 'spot_yj_danmu.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Yanji%2C_China.jpg/960px-Yanji%2C_China.jpg',
    fallback: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=960&q=80'
  },
  {
    name: 'spot_yj_museum.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Yanbian_Museum_5.jpg/960px-Yanbian_Museum_5.jpg',
    fallback: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=960&q=80'
  },
  {
    name: 'spot_yj_maoershan.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Maoershan-Boarded_Trail.jpg/960px-Maoershan-Boarded_Trail.jpg',
    fallback: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=960&q=80'
  },
  {
    name: 'spot_yj_fangchuan.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Aerial_view_of_Tumen_River_at_Namyang.jpg/960px-Aerial_view_of_Tumen_River_at_Namyang.jpg',
    fallback: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=960&q=80'
  },
  {
    name: 'spot_yj_tumen.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/%E5%9B%BE%E4%BB%AC%E5%8F%A3%E5%B2%B8.jpg/960px-%E5%9B%BE%E4%BB%AC%E5%8F%A3%E5%B2%B8.jpg',
    fallback: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=960&q=80'
  },
  {
    name: 'spot_yj_riguangshan.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Aerial_view_of_Tumen_River_at_Namyang.jpg/960px-Aerial_view_of_Tumen_River_at_Namyang.jpg',
    fallback: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=960&q=80'
  },
  {
    name: 'spot_yj_rice.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=960&q=80',
    fallback: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=960&q=80'
  },
  {
    name: 'spot_yj_applepear.jpg',
    url: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=960&q=80',
    fallback: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=960&q=80'
  },
  {
    name: 'spot_yj_park.jpg',
    url: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=960&q=80',
    fallback: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=960&q=80'
  },
  {
    name: 'spot_yj_watermarket.jpg',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=960&q=80',
    fallback: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=960&q=80'
  },
  {
    name: 'spot_yj_westmarket.jpg',
    url: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=960&q=80',
    fallback: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=960&q=80'
  },
  {
    name: 'spot_yj_burhatong.jpg',
    url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=960&q=80',
    fallback: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=960&q=80'
  }
];

function download(url, dest, fallback) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;

    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return download(res.headers.location, dest, fallback).then(resolve);
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        if (fallback) {
          console.log(`Failed ${url} (${res.statusCode}), using fallback ${fallback}`);
          return download(fallback, dest, null).then(resolve);
        }
        console.error(`Failed ${url}: HTTP ${res.statusCode}`);
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const stat = fs.statSync(dest);
        if (stat.size < 1000) {
          if (fs.existsSync(dest)) fs.unlinkSync(dest);
          if (fallback) return download(fallback, dest, null).then(resolve);
          return resolve(false);
        }
        console.log(`Saved ${path.basename(dest)} (${stat.size} bytes)`);
        resolve(true);
      });
    });

    req.on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      if (fallback) {
        console.log(`Error ${url} (${err.message}), using fallback`);
        return download(fallback, dest, null).then(resolve);
      }
      console.error(`Error ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Starting download of ${images.length} Yanji spot images...`);
  for (const item of images) {
    const dest = path.join(targetDir, item.name);
    await download(item.url, dest, item.fallback);
  }
  console.log('All Yanji spot downloads finished!');
}

run();
