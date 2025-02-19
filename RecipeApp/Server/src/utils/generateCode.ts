// Helper function to generate a random 6-digit code
const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };


  export {generateCode}