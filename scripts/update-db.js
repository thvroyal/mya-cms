const { Client } = require('pg');

async function main() {
  const client = new Client({
    user: 'postgres',
    host: '103.15.50.20',
    database: 'mya_cms',
    password: 'myainterior',
    port: 5432
  })
  
  await client.connect();
  
  const allFilesMedia = await client.query('SELECT * FROM files')
  
  await Promise.all(allFilesMedia.rows.map(async (file) => {
    if (!file.formats) return;
    const newObject = {...file.formats};
    Object.keys(file.formats).map((key) => {
      newObject[key] = {
        ...newObject[key],
        url: newObject[key].url.replace('https://mya-interior-s3.s3.ap-southeast-1.amazonaws.com', '/uploads'),
      }
    });
    await client.query(`
    UPDATE files
    SET formats=($1)
    WHERE id=$2
    `, [JSON.stringify(newObject), file.id]);
    console.log(`Updated ${file.name}`)
    
    // await client.query(`
    // UPDATE files
    // SET url=$1,provider=$2
    // WHERE id=$3
    // `, [newURL, provider, file.id])
  }))
  
  
  await client.end();
}

main();