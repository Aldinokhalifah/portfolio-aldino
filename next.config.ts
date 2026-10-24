import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Security Headers Configuration
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Prevent clickjacking attacks
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Enable XSS protection (for older browsers, still has defense-in-depth benefit)
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Content Security Policy (CSP) - restricts resources that browser can load
          {
            key: "Content-Security-Policy",
            value: "default-src 'self' http: https:; " +
                    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.simpleicons.org; " +
                    "style-src 'self' 'unsafe-inline' https://cdn.simpleicons.org; " +
                    "img-src 'self' http: https: data:; " +
                    "font-src 'self' https://fonts.gstatic.com; " +
                    "connect-src 'self' https://service_2hffut2.axios-mail.com https://api.emailjs.com; " +
                    "frame-ancestors 'self'; " +
                    "base-uri 'self'; " +
                    "form-action 'self'; " +
                    "frame-src 'self'; " +
                    "object-src 'none'; " +
                    "upgrade-insecure-requests",
          },
          // Control referrer information
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // DNS prefetch control
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Permissions Policy (formerly Feature Policy)
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Permissions Policy for speech capture only on secure contexts
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
