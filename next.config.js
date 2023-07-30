/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"**"
            }
        ]
        // domains: [
            // "**"
            // "images.pexels.com",
            // "freepik.com",
            // "img.freepik.com",
            // "https://icons8.com",
            // "https://www.flaticon.com/"
                
    //  ]
 }
}

module.exports = nextConfig
