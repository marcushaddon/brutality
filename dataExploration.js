const fs = require('fs');
const om = require('object-mapper');

const data = JSON.parse(fs.readFileSync('./data.json').toString());

const check = data.data.map(d => ({
    title: `${d.city}, ${d.state} - ${d.title}`,
    links: d.links,
    evidence: d.evidence.map(e => e.url).reduce((a, c) => [...a, c], [])
}))

console.log(check);

fs.writeFileSync('data.json', JSON.stringify(data, null, 4))