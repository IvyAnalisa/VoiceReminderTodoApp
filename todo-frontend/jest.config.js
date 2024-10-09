module.exports = {
    // Specify the paths Jest should scan for tests
    roots: ['<rootDir>/src'],
    
    // Transform .js and .jsx files using babel-jest
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    
    // Specify the file extensions Jest should look for
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    
    // Set up Jest to collect coverage information
    collectCoverage: true,
    coverageDirectory: 'coverage',
  };
  