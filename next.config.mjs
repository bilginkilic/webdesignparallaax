/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Enable SWC minification
    compiler: {
      styledComponents: true, // Example: enable styled-components with SWC
    }
  };
  
  export default nextConfig;