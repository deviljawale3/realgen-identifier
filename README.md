# RealGen Identifier 🛡️

<div align="center">

**AI-Powered Content Detection & Forensic Analysis**

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff0080?logo=framer)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Active-success)]()

**Detect AI-generated content instantly with deep forensic analysis**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

**RealGen Identifier** is a sophisticated AI-powered content detection system that identifies whether digital content is AI-generated or human-created. Built by [Deejay Labs](https://deejaylabs.com), it provides detailed attribution, reasoning, and official forensic certificates.

### Key Capabilities

- 🔍 **Multi-Format Analysis**: Images, videos, PDFs, documents, spreadsheets, and text
- 🤖 **AI Engine Attribution**: Identify Midjourney, DALL-E, GPT-4o, Claude, and more
- 📊 **Deep Forensics**: Spatial frequency analysis, linguistic fingerprinting, Benford's Law testing
- 📜 **Official Certificates**: Generate exportable forensic certificates
- ✨ **Premium UI**: Cyber-forensic glassmorphism design with 60fps animations

---

## ✨ Features

### Content Detection

#### Image & Video Analysis
- **Spatial Frequency Analysis**: Detect AI pixel patterns
- **Temporal Analysis**: Identify synthetic video content
- **AI Engine Detection**: Midjourney v6.2, DALL-E 3, Stable Diffusion XL, etc.
- **EXIF/IPTC Metadata**: Extract device and software information

#### Document & Text Analysis
- **Linguistic Fingerprinting**: Burstiness & Perplexity analysis
- **LLM Writing Detection**: Identify GPT-4o, Claude 3.5, Gemini, etc.
- **Semantic Analysis**: Detect inconsistencies and AI patterns

#### Spreadsheet Analysis
- **Benford's Law Testing**: Detect algorithmically simulated data
- **Clumping Coefficient**: Identify unnatural data grouping
- **Statistical Anomaly Detection**: Find perfect randomness signatures

### User Interface

- **Cyber-Forensic Glassmorphism**: Deep midnight-blue and obsidian palette
- **Deep-Pulse Radar Animation**: Stunning scanning visualization
- **3D Animated Logo**: Deejay Labs branding with heartbeat glow
- **Responsive Design**: Mobile-optimized for all screen sizes
- **60fps Animations**: Smooth Framer Motion transitions

### Forensic Tools

- **Forensic Certificate**: Official verification documents
- **PDF Export**: Download certificates for documentation
- **Unique Certificate IDs**: Traceable verification records
- **Detailed Reasoning**: Explain WHY content was flagged

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/deejaylabs/realgen-identifier.git
cd realgen-identifier

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env

# Start development server
bun run dev
```

### Environment Variables

```env
# AI Service Configuration (if using external services)
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
HIVE_AI_API_KEY=your_hive_ai_key
GPTZERO_API_KEY=your_gptzero_key

# Optional: Database Configuration
DATABASE_URL=your_database_url
```

### Project Structure

```
realgen-identifier/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── analyze/
│   │   │       └── route.ts          # Forensic analysis API
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Main application page
│   │   └── globals.css               # Global styles
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   └── result-screen.tsx         # Result display component
│   ├── lib/
│   │   ├── db.ts                     # Database client
│   │   └── utils.ts                  # Utility functions
│   └── hooks/
│       └── use-toast.ts              # Toast notifications
├── prisma/
│   └── schema.prisma                 # Database schema
├── public/                           # Static assets
├── SYSTEM_ARCHITECTURE.md            # Architecture documentation
├── PLAY_STORE_DESCRIPTION.md         # App store description
└── README.md                         # This file
```

---

## 💻 Usage

### Uploading Files

1. **Drag & Drop**: Drag any supported file onto the upload area
2. **Click to Browse**: Select files from your device
3. **Supported Formats**:
   - Images: PNG, JPG, JPEG, WebP, GIF
   - Videos: MP4, WebM, MOV
   - Documents: PDF, DOCX
   - Spreadsheets: XLSX
   - Text: TXT

### Viewing Results

After analysis, you'll see:

1. **AI/Human Badge**: Clear indication of content origin
2. **Confidence Score**: Typically 85-99%
3. **AI Engine** (if applicable): Specific model detected
4. **Synthetic Artifacts**: Detailed reasoning for AI detection
5. **Human Origin**: Device, software, and author information
6. **Forensic Certificate**: Official verification document

### Exporting Certificates

Click the "Export Certificate" button to download a PDF forensic certificate that includes:
- File name and type
- Analysis result
- Confidence level
- Detected engine (if applicable)
- Unique Certificate ID
- Official Deejay Labs branding

---

## 🏗️ Tech Stack

### Frontend

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **File Upload**: react-dropzone

### Backend

- **API Routes**: Next.js 15 API Routes
- **AI Integration**: z-ai-web-dev-sdk
- **Database**: Prisma ORM with SQLite (configurable)
- **State Management**: Zustand (client), TanStack Query (server)
- **Form Handling**: React Hook Form with Zod

### Analysis Services

- **Image/Video**: Spatial Frequency Analysis, VLM
- **Documents/Text**: Linguistic Fingerprinting, LLM Analysis
- **Spreadsheets**: Benford's Law, Clumping Coefficient
- **External APIs**: Hive AI, GPTZero (integrations available)

---

## 📊 API Documentation

### POST /api/analyze

Upload and analyze a file for AI content detection.

**Request:**

```typescript
// FormData
{
  file: File  // Supported file types
}
```

**Response:**

```typescript
{
  isAIGenerated: boolean,
  confidence: number,  // 0-100
  aiEngine?: string,   // e.g., "GPT-4o", "Midjourney v6.2"
  reasoning: string[],  // Array of artifact descriptions
  humanOrigin?: {
    device?: string,    // e.g., "iPhone 15 Pro"
    software?: string,  // e.g., "Adobe Photoshop"
    author?: string     // Original author name
  },
  fileName: string,
  fileType: string,
  scanDate: string  // ISO 8601 timestamp
}
```

**Example:**

```bash
curl -X POST /api/analyze \
  -F "file=@example.png" \
  -H "Content-Type: multipart/form-data"
```

---

## 🎨 UI Components

### Upload Interface

- Drag & drop zone with visual feedback
- File type badges
- Hover and active states
- Glassmorphism design

### Loading Animation

- Deep-Pulse Radar visualization
- Expanding concentric circles
- Rotating scanning line
- Center pulse with heartbeat effect

### Result Screen

- AI/Human identification badge
- Confidence score display
- Detected AI engine (for AI content)
- Synthetic artifacts list
- Human origin verification (for human content)
- Scan metadata section
- Export PDF button

### Forensic Certificate

- Official certificate design
- Certificate ID generation
- Analysis result summary
- Deejay Labs branding
- PDF export capability

### Animated Footer

- 3D rotating logo
- Heartbeat glow animation
- Consistent branding

---

## 🔧 Configuration

### File Type Configuration

Edit `src/app/page.tsx` to modify accepted file types:

```typescript
accept: {
  'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif'],
  'video/*': ['.mp4', '.webm', '.mov'],
  'application/pdf': ['.pdf'],
  // ... more types
}
```

### Analysis Configuration

Edit `src/app/api/analyze/route.ts` to customize:
- Analysis thresholds
- AI engine detection lists
- Confidence scoring
- Reasoning messages

### UI Customization

Modify colors and styling in:
- `src/app/globals.css` for global styles
- `src/app/page.tsx` for page-specific styles
- Tailwind classes throughout components

---

## 📈 Performance

### Optimization Features

- **Code Splitting**: Next.js automatic code splitting
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Next.js Image component
- **Caching**: Response caching for API routes
- **Streaming**: Large file streaming support

### Benchmarks

- **Initial Load**: < 2s
- **File Upload**: Instant (drag & drop)
- **Analysis Time**: 2-5 seconds (depending on file type)
- **Result Rendering**: < 500ms
- **PDF Export**: < 1s

---

## 🔒 Security

### Data Privacy

- **No Persistent Storage**: Files analyzed and immediately deleted
- **Encrypted Transmission**: HTTPS/TLS encryption
- **Client-Side Validation**: File type and size checks
- **Rate Limiting**: Prevent abuse (configurable)
- **GDPR Compliant**: Privacy regulation compliant

### Best Practices

- Sanitize all file uploads
- Validate file signatures (magic bytes)
- Implement file size limits
- Use environment variables for sensitive data
- Regular security audits

---

## 🧪 Testing

```bash
# Run linter
bun run lint

# Build for production
bun run build

# Start production server
bun run start
```

---

## 📚 Documentation

- [System Architecture](./SYSTEM_ARCHITECTURE.md) - Detailed technical architecture
- [Play Store Description](./PLAY_STORE_DESCRIPTION.md) - App store marketing copy
- [API Documentation](#-api-documentation) - API reference
- [Component Documentation](#-ui-components) - UI component details

---

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linter
5. Submit a pull request

### Code Style

- Use TypeScript strict mode
- Follow Prettier formatting
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Icon library

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/deejaylabs/realgen-identifier/issues)
- **Email**: support@deejaylabs.com
- **Website**: [deejaylabs.com](https://deejaylabs.com)

---

## 🔮 Roadmap

### Upcoming Features

- [ ] Real-time analysis with WebSocket
- [ ] Batch file processing
- [ ] Public API access
- [ ] Mobile apps (iOS/Android)
- [ ] Blockchain certificate verification
- [ ] User accounts and history
- [ ] Enterprise features
- [ ] Team collaboration
- [ ] Advanced analytics dashboard

---

<div align="center">

**Built with ❤️ by [Deejay Labs](https://deejaylabs.com)**

[Website](https://deejaylabs.com) • [Twitter](https://twitter.com/deejaylabs) • [GitHub](https://github.com/deejaylabs)

**RealGen Identifier - Where Digital Meets Trust™**

</div>
