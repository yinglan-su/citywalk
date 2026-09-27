const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir1 = path.join(__dirname, '..', 'images');
const targetDir2 = path.join(__dirname, '..', 'dist_qingdao', 'images');

if (!fs.existsSync(targetDir1)) fs.mkdirSync(targetDir1, { recursive: true });
if (!fs.existsSync(targetDir2)) fs.mkdirSync(targetDir2, { recursive: true });

const images = [
  {
    name: 'spot_bridge.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Jiaozhou_Bay_Bridge_%28Qingdao_side%29.jpg/960px-Jiaozhou_Bay_Bridge_%28Qingdao_side%29.jpg',
    fallback: 'https://images.unsplash.com/photo-1545641203-7d072a14e3b2?w=960&q=80'
  },
  {
    name: 'spot_taipingjiao.jpg',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=960&q=80',
    fallback: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=960&q=80'
  },
  {
    name: 'spot_badaguan.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/%E9%9D%92%E5%B2%9B%E5%85%AB%E5%A4%A7%E5%85%B3%E8%8A%B1%E7%9F%B3%E6%A5%BC.jpg/960px-%E9%9D%92%E5%B2%9B%E5%85%AB%E5%A4%A7%E5%85%B3%E8%8A%B1%E7%9F%B3%E6%A5%BC.jpg',
    fallback: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=960&q=80'
  },
  {
    name: 'spot_governor.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%E9%9D%92%E5%B2%9B%E8%BF%8E%E5%AE%BE%E9%A6%86_01.jpg/960px-%E9%9D%92%E5%B2%9B%E8%BF%8E%E5%AE%BE%E9%A6%86_01.jpg',
    fallback: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=960&q=80'
  },
  {
    name: 'spot_xiaoyushan.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%E5%B0%8F%E9%B1%BC%E5%B1%B1%E5%85%AC%E5%9B%AD%E2%80%94%E2%80%94%E8%A7%88%E6%BD%AE%E9%98%81.jpg/960px-%E5%B0%8F%E9%B1%BC%E5%B1%B1%E5%85%AC%E5%9B%AD%E2%80%94%E2%80%94%E8%A7%88%E6%BD%AE%E9%98%81.jpg',
    fallback: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=960&q=80'
  },
  {
    name: 'spot_shazikou.jpg',
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=960&q=80',
    fallback: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=960&q=80'
  },
  {
    name: 'spot_taiqing.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/%E9%9D%92%E5%B2%9B%E5%B4%82%E5%B1%B1_-_%E5%A4%AA%E6%B8%85%E5%AE%AB_-_panoramio.jpg/960px-%E9%9D%92%E5%B2%9B%E5%B4%82%E5%B1%B1_-_%E5%A4%AA%E6%B8%85%E5%AE%AB_-_panoramio.jpg',
    fallback: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=960&q=80'
  },
  {
    name: 'spot_shilaoren.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/%E9%9D%92%E5%B2%9B%E7%9F%B3%E8%80%81%E4%BA%BA_2008-10-30.jpg/960px-%E9%9D%92%E5%B2%9B%E7%9F%B3%E8%80%81%E4%BA%BA_2008-10-30.jpg',
    fallback: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=960&q=80'
  },
  {
    name: 'spot_sculpture.jpg',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=960&q=80',
    fallback: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=960&q=80'
  },
  {
    name: 'spot_beer_museum.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Tsingdao_Brewery.jpg/960px-Tsingdao_Brewery.jpg',
    fallback: 'https://images.unsplash.com/photo-1538488881522-4321453a6988?w=960&q=80'
  },
  {
    name: 'spot_yacht.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Qingdao_Olympic_Sailing_Center.JPG/960px-Qingdao_Olympic_Sailing_Center.JPG',
    fallback: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=960&q=80'
  },
  {
    name: 'spot_zhanqiao.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/%E9%9D%92%E5%B2%9B%E6%A0%88%E6%A1%A5_Ehemalige_Landungsbr%C3%BCcke_Qingdao.jpg/960px-%E9%9D%92%E5%B2%9B%E6%A0%88%E6%A1%A5_Ehemalige_Landungsbr%C3%BCcke_Qingdao.jpg',
    fallback: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=960&q=80'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'QdTravelPlanner/1.0 (info@7ka.fit)'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    });
    req.on('error', reject);
  });
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  console.log(`Starting download of ${images.length} spot images with spacing...`);
  for (const item of images) {
    const dest1 = path.join(targetDir1, item.name);
    const dest2 = path.join(targetDir2, item.name);

    if (fs.existsSync(dest1) && fs.statSync(dest1).size > 10000) {
      console.log(`- ${item.name} already exists (${(fs.statSync(dest1).size / 1024).toFixed(1)} KB), skipping.`);
      fs.copyFileSync(dest1, dest2);
      continue;
    }

    try {
      console.log(`Downloading ${item.name} from primary URL...`);
      await downloadFile(item.url, dest1);
      fs.copyFileSync(dest1, dest2);
      const stats = fs.statSync(dest1);
      console.log(`✓ Saved ${item.name} (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.warn(`Primary failed for ${item.name} (${err.message}), trying fallback...`);
      try {
        await sleep(1000);
        await downloadFile(item.fallback, dest1);
        fs.copyFileSync(dest1, dest2);
        const stats = fs.statSync(dest1);
        console.log(`✓ Saved ${item.name} via fallback (${(stats.size / 1024).toFixed(1)} KB)`);
      } catch (fErr) {
        console.error(`✗ All failed for ${item.name}: ${fErr.message}`);
      }
    }
    await sleep(2500); // 2.5s delay to be polite and avoid 429
  }
  console.log('Finished downloading spot images!');
}

main();
