const fs = require('fs');
const path = require('path');

const targetDir = path.resolve('app', '(tabs)');
const filesToManage = [
    'ai.jsx',
    'home.jsx',
    'iot.jsx',
    'meds.jsx',
    'profile.jsx',
    'support.jsx'
];

console.log(`Target Directory: ${targetDir}`);

filesToManage.forEach(file => {
    const filePath = path.join(targetDir, file);
    try {
        if (fs.existsSync(filePath)) {
            console.log(`Found: ${filePath}`);
            // Attempt to rename first (sometimes works better than delete if open)
            const tempPath = filePath + '.temp_' + Date.now();
            fs.renameSync(filePath, tempPath);
            console.log(`Renamed to temp: ${tempPath}`);
            fs.unlinkSync(tempPath);
            console.log(`Permanently deleted: ${file}`);
        } else {
            console.log(`Not found (already gone?): ${file}`);
        }
    } catch (err) {
        console.error(`ERROR on ${file}: ${err.message}`);
    }
});
