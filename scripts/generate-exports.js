const fs = require('fs');
const path = require('path');

/**
 * Generate exports for a single feature
 */
function generateExports(featurePath) {
    const folders = ['components', 'lib', 'schema', 'types'];
    const exports = [];

    folders.forEach(folder => {
        const folderPath = path.join(featurePath, folder);

        // Check if folder exists
        if (!fs.existsSync(folderPath)) return;

        // Read all files in the folder
        const files = fs.readdirSync(folderPath)
            .filter(file => {
                const isTypeScriptFile = file.endsWith('.ts') || file.endsWith('.tsx');
                const isNotIndex = file !== 'index.ts' && file !== 'index.tsx';
                return isTypeScriptFile && isNotIndex;
            });

        // Generate export statements
        files.forEach(file => {
            const fileName = file.replace(/\.(ts|tsx)$/, '');
            exports.push(`export * from './${folder}/${fileName}';`);
        });
    });

    // Write to index.ts
    const indexPath = path.join(featurePath, 'index.ts');
    const content = exports.length > 0 ? exports.join('\n') + '\n' : '// No exports found\n';

    fs.writeFileSync(indexPath, content);

    const featureName = path.basename(featurePath);
    console.log(`✓ Generated ${exports.length} exports for feature: ${featureName}`);
}

/**
 * Generate exports for all features
 */
function generateAllFeatures(featuresPath) {
    if (!fs.existsSync(featuresPath)) {
        console.error(`❌ Features directory not found: ${featuresPath}`);
        console.log('Please make sure your features are in src/features or provide the correct path');
        process.exit(1);
    }

    const features = fs.readdirSync(featuresPath)
        .filter(item => {
            const itemPath = path.join(featuresPath, item);
            return fs.statSync(itemPath).isDirectory();
        });

    if (features.length === 0) {
        console.log('⚠️  No feature folders found');
        return;
    }

    console.log(`\n🔄 Generating exports for ${features.length} features...\n`);

    features.forEach(feature => {
        const featurePath = path.join(featuresPath, feature);
        generateExports(featurePath);
    });

    console.log(`\n✅ Successfully generated exports for all features!\n`);
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
    // Generate for all features in default location
    const defaultFeaturesPath = path.join(process.cwd(), 'src/features');
    generateAllFeatures(defaultFeaturesPath);
} else if (args[0] === '--help' || args[0] === '-h') {
    console.log(`
Usage:
  node scripts/generate-exports.js [options] [path]

Options:
  --help, -h          Show this help message
  --all               Generate exports for all features (default)
  --feature <path>    Generate exports for a specific feature

Examples:
  node scripts/generate-exports.js
  node scripts/generate-exports.js --feature src/features/cart
  node scripts/generate-exports.js src/features
  `);
} else if (args[0] === '--feature' && args[1]) {
    // Generate for specific feature
    const featurePath = path.join(process.cwd(), args[1]);
    generateExports(featurePath);
} else {
    // Custom features path
    const customFeaturesPath = path.join(process.cwd(), args[0]);
    generateAllFeatures(customFeaturesPath);
}