/**
 * Generate Open Graph image for social media previews
 * Run with: node scripts/generate-og.mjs
 */

import { ImageResponse } from '@vercel/og';
import { writeFileSync } from 'fs';
import { join } from 'path';

const width = 1200;
const height = 630;

// Create the OG image
const imageResponse = new ImageResponse(
  {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
        background: 'linear-gradient(135deg, #0c4a6e 0%, #1e293b 50%, #1e1b4b 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            },
            children: [
              // Name
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '72px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    letterSpacing: '-0.02em',
                  },
                  children: 'Andreu Sabater',
                },
              },
              // Title
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '42px',
                    color: '#e2e8f0',
                    fontWeight: '500',
                    letterSpacing: '-0.01em',
                  },
                  children: 'Software/Backend Engineer — Portfolio',
                },
              },
              // Description
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '32px',
                    color: '#94a3b8',
                    marginTop: '12px',
                    fontWeight: '400',
                  },
                  children: 'Python/Django • Microservices • DDD • CI/CD • GenAI',
                },
              },
              // Location badge
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '24px',
                    fontSize: '28px',
                    color: '#cbd5e1',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '12px 24px',
                    borderRadius: '12px',
                  },
                  children: '📍 Barcelona',
                },
              },
            ],
          },
        },
        // Decorative elements
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '60px',
              right: '60px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
              borderRadius: '50%',
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontSize: '24px',
              color: '#64748b',
              fontWeight: '500',
            },
            children: 'andreusabaterl.github.io',
          },
        },
      ],
    },
  },
  {
    width,
    height,
  }
);

// Convert to PNG and save
const arrayBuffer = await imageResponse.arrayBuffer();
const buffer = Buffer.from(arrayBuffer);

const outputPath = join(process.cwd(), 'public', 'og.png');
writeFileSync(outputPath, buffer);

console.log(`✓ Open Graph image generated: ${outputPath}`);
