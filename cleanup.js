const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\HP\\Desktop\\PROJECTS\\MEDSAFE\\meda\\app\\(tabs)';
const filesToRename = [
    'ai.jsx',
    'home.jsx',
    'iot.jsx',
    'meds.jsx',
    'profile.jsx',
    'support.jsx'
];

filesToRename.forEach(file => {
    const oldPath = path.join(targetDir, file);
    const newPath = path.join(targetDir, file + '.bak');
    try {
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            console.log(`Successfully renamed ${file} to ${file}.bak`);
        } else {
            console.log(`${file} does not exist`);
        }
    } catch (err) {
        console.error(`Error renaming ${file}: ${err.message}`);
    }
});
