import https from 'https';

const urls = [
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549849500-b6f5cf2da017?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589301773012-81781eb8980b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626804475297-41609ea0aa4eb?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533036830509-f815cd92db63?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-8350ccb18fb2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589139589702-861c8f1e56b4?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=800&auto=format&fit=crop"
];

async function checkUrl(url: string) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: e.message });
    });
  });
}

async function main() {
  for (const url of urls) {
    const res = await checkUrl(url);
    console.log(res);
  }
}
main();
