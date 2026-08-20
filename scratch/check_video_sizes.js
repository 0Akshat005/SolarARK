const https = require('https');

function getHeaders(url) {
  return new Promise((resolve, reject) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        size: res.headers['content-length'] ? (Number(res.headers['content-length']) / (1024 * 1024)).toFixed(2) + ' MB' : 'unknown',
        type: res.headers['content-type']
      });
    }).on('error', reject).end();
  });
}

async function main() {
  const videos = [
    'https://www.thesolarark.com/static/media/homepage1.064e908497b52c839705.mp4',
    'https://www.thesolarark.com/static/media/SolarPanels.f60c55f23cce92688a48.mp4',
    'https://www.thesolarark.com/static/media/aboutus.57a0a40202b62db99db4.mp4',
    'https://www.thesolarark.com/static/media/client22.80bbb9519d5085aa522d.mp4',
    'https://www.thesolarark.com/static/media/client33.fa92b1c9475488f3c0bd.mp4',
    'https://www.thesolarark.com/static/media/s1.1c5313d3071bec24d6ce.mp4',
    'https://www.thesolarark.com/static/media/s2.90194067b95adf3e2789.mp4'
  ];

  for (const v of videos) {
    const info = await getHeaders(v);
    console.log(info);
  }
}

main().catch(console.error);
