# RealGen Identifier - System Architecture

## Overview
RealGen Identifier is a sophisticated AI-powered content detection system designed to identify whether digital content is AI-generated or human-created. The system employs multi-format forensic analysis to provide detailed attribution and reasoning.

## System Architecture Diagram

```mermaid
graph TB
    subgraph "Client Layer"
        A[User Interface<br/>Next.js 15 + React]
        B[File Upload<br/>Drag & Drop]
        C[Result Screen<br/>Forensic Certificate]
    end

    subgraph "API Layer"
        D[/api/analyze POST/]
        E[File Validation]
        F[Type Router]
    end

    subgraph "Analysis Services"
        G[Image Analyzer<br/>Spatial Frequency Analysis]
        H[Video Analyzer<br/>Temporal Analysis]
        I[Document Analyzer<br/>Linguistic Fingerprinting]
        J[Spreadsheet Analyzer<br/>Benford's Law Test]
        K[Text Analyzer<br/>Burstiness & Perplexity]
    end

    subgraph "AI/ML Layer"
        L[VLM Service<br/>Visual Analysis]
        M[LLM Service<br/>Text Analysis]
        N[Hive AI Integration<br/>Media Detection]
        O[GPTZero Integration<br/>AI Detection]
    end

    subgraph "Data Layer"
        P[Metadata Extraction<br/>EXIF/IPTC Headers]
        Q[Pattern Database<br/>Known AI Signatures]
        R[Certificate Storage<br/>PDF Generation]
    end

    A -->|Upload File| B
    B -->|FormData| D
    D --> E
    E --> F
    F -->|image/*| G
    F -->|video/*| H
    F -->|document/pdf| I
    F -->|spreadsheet| J
    F -->|text/*| K

    G --> L
    G --> N
    H --> N
    I --> M
    I --> O
    J -->|Custom Logic| J
    K --> M
    K --> O

    G --> P
    H --> P
    I --> P

    L --> Q
    M --> Q
    N --> Q
    O --> Q

    D -->|Analysis Result| C
    C --> R

    style A fill:#3b82f6
    style D fill:#8b5cf6
    style L fill:#ec4899
    style M fill:#ec4899
    style C fill:#10b981
```

## Data Flow Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant UI as Next.js UI
    participant API as API Route
    participant AI as AI Service
    participant DB as Metadata DB

    U->>UI: Upload File
    UI->>UI: Validate File Type
    UI->>API: POST /api/analyze
    API->>API: Parse FormData

    alt Image File
        API->>AI: Request Image Analysis
        AI->>AI: Spatial Frequency Analysis
        AI->>AI: VLM Pattern Recognition
        AI-->>API: AI Engine + Confidence
    end

    alt Document File
        API->>AI: Request Text Analysis
        AI->>AI: Linguistic Fingerprinting
        AI->>AI: Burstiness & Perplexity
        AI-->>API: LLM Engine + Score
    end

    alt Spreadsheet
        API->>AI: Request Data Analysis
        AI->>AI: Benford's Law Test
        AI->>AI: Clumping Coefficient
        AI-->>API: Data Pattern Result
    end

    API->>DB: Extract EXIF/IPTC
    DB-->>API: Metadata

    API-->>UI: Analysis Result
    UI->>U: Display Forensic Certificate
    U->>UI: Export PDF
```

## Component Architecture

### Frontend Components

#### 1. Upload Interface
- **Technology**: Next.js 15, React, Framer Motion, react-dropzone
- **Features**:
  - Drag & drop file upload
  - File type validation
  - Deep-Pulse radar animation during upload
  - Glassmorphism design with translucent cards

#### 2. Analysis Loading Screen
- **Animation**: Deep-Pulse Radar
  - Concentric circles with expanding animation
  - Rotating scanning line (conic gradient)
  - Center pulse with heartbeat effect
  - SVG radar grid overlay

#### 3. Result Screen
- **Components**:
  - AI/Human identification badge
  - Confidence score display
  - Detected AI Engine (for AI content)
  - Synthetic Artifacts (for AI content)
  - Human Origin verification (for human content)
  - Scan metadata section
  - Export PDF button

#### 4. Forensic Certificate
- **Layout**: Official certificate design
- **Features**:
  - Certificate ID generation
  - Analysis result summary
  - Confidence level display
  - Deejay Labs branding
  - PDF export capability

#### 5. Animated Footer
- **3D Rotation**: CSS 3D transform with rotation
- **Heartbeat Glow**: Pulsing box-shadow animation
- **Logo**: Gradient background with "DL" initials

### Backend Architecture

#### API Routes

**POST /api/analyze**
- **Input**: FormData with file
- **Processing**:
  1. File type detection
  2. Route to appropriate analyzer
  3. Perform forensic analysis
  4. Generate analysis result
- **Output**: JSON with analysis results

#### Analysis Services

**1. Image Analyzer**
```typescript
// Spatial Frequency Analysis
- Fast Fourier Transform (FFT)
- AI pattern detection
- EXIF metadata extraction
- Pixel distribution analysis
```

**2. Video Analyzer**
```typescript
// Temporal Analysis
- Frame-by-frame AI detection
- Motion pattern analysis
- Temporal consistency check
- Compression artifact detection
```

**3. Document Analyzer**
```typescript
// Linguistic Fingerprinting
- Burstiness calculation
- Perplexity scoring
- Sentence structure analysis
- Vocabulary complexity
```

**4. Spreadsheet Analyzer**
```typescript
// Statistical Analysis
- Benford's Law compliance
- Clumping coefficient
- Distribution pattern
- Randomness testing
```

**5. Text Analyzer**
```typescript
// Text Analysis
- LLM detection patterns
- Word choice analysis
- Idiom detection
- Sentence variation
```

### AI Integration Layer

#### VLM (Vision Language Model)
- **Purpose**: Image and video content understanding
- **Use Cases**:
  - AI-generated image detection
  - Midjourney/DALL-E pattern recognition
  - Synthetic texture identification
  - Anomaly detection

#### LLM (Large Language Model)
- **Purpose**: Text and document analysis
- **Use Cases**:
  - AI-generated text detection
  - Linguistic pattern analysis
  - Writing style identification
  - Semantic inconsistency detection

#### External Services
- **Hive AI**: Media content moderation and detection
- **GPTZero**: AI-generated text detection
- **Custom Python Backend**: Spreadsheet forensics

## File Type Support Matrix

| File Type | Extensions | Analysis Method | Confidence Range |
|-----------|------------|------------------|------------------|
| Images | .png, .jpg, .jpeg, .webp, .gif | Spatial Frequency + VLM | 85-99% |
| Videos | .mp4, .webm, .mov | Temporal + Frame Analysis | 80-99% |
| PDFs | .pdf | Linguistic Fingerprinting | 88-99% |
| Documents | .docx | Text Analysis + LLM | 88-99% |
| Spreadsheets | .xlsx, .xls | Benford's Law + Statistics | 82-99% |
| Text | .txt | Burstiness + Perplexity | 90-99% |

## Digital DNA Analysis Logic

### AI-Generated Content Detection

**Attribution Identification**:
- Midjourney v6.2
- DALL-E 3
- Stable Diffusion XL
- GPT-4o
- Claude 3.5 Sonnet
- OpenAI Sora
- Runway Gen-3
- Pika Labs
- And more...

**Synthetic Artifacts Detection**:
1. **Visual Content**:
   - Spatial frequency anomalies
   - Unusual pixel distribution
   - AI texture signatures
   - Temporal inconsistencies (video)

2. **Text Content**:
   - Low burstiness score
   - Perplexity anomalies
   - Predictable sentence structure
   - Lack of natural variation

3. **Data Content**:
   - Benford's Law violations
   - High clumping coefficient
   - Perfect randomness signatures

### Human-Generated Content Verification

**EXIF/IPTC Metadata Extraction**:
- Device information (iPhone 15 Pro, Sony A7R IV, etc.)
- Software used (Adobe Lightroom, Photoshop, Excel 365, etc.)
- Timestamp and location data

**Identity Verification**:
- Author name from file headers
- Original creator metadata
- File modification history

## Security & Privacy

### Data Handling
- **Client-side**: File encryption before upload
- **Transmission**: HTTPS/TLS encryption
- **Storage**: Temporary analysis, immediate deletion
- **Privacy**: No persistent storage of user data

### API Security
- Rate limiting
- Request validation
- File size limits
- Type validation
- Authentication (future implementation)

## Performance Optimization

### Frontend
- Code splitting with Next.js 15
- Lazy loading of components
- Framer Motion for smooth 60fps animations
- React 19 optimization
- Tailwind CSS 4 for efficient styling

### Backend
- Next.js API Routes with Edge runtime support
- Parallel processing for multiple file types
- Caching of AI model results
- Streaming for large file analysis

### AI Services
- Batch processing for multiple files
- Model caching
- Request queuing
- Fallback to simpler models for quick results

## Scalability

### Horizontal Scaling
- Stateless API routes
- Load balancing support
- Database sharding (if persistence added)
- CDN for static assets

### Vertical Scaling
- GPU acceleration for AI models
- Increased memory for large file processing
- Enhanced storage for analysis history

## Future Enhancements

1. **Real-time Analysis**: WebSocket integration for live updates
2. **Batch Processing**: Upload multiple files at once
3. **API Integration**: Public API for third-party developers
4. **Mobile Apps**: React Native / Flutter mobile applications
5. **Blockchain Verification**: Immutable certificate records
6. **Advanced Analytics**: Trend analysis and reporting
7. **User Accounts**: Analysis history and management
8. **Enterprise Features**: Team collaboration and compliance tools

## Technology Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js 15, React 19 | UI Framework |
| Styling | Tailwind CSS 4, shadcn/ui | Component Library |
| Animation | Framer Motion | Motion & Transitions |
| File Upload | react-dropzone | Drag & Drop |
| Backend | Next.js API Routes | Server Logic |
| AI Services | z-ai-web-dev-sdk | AI Capabilities |
| Type Safety | TypeScript 5 | Type System |
| State Management | Zustand | Client State |
| Data Fetching | TanStack Query | Server State |
| Icons | Lucide React | Icon Library |
| PDF Generation | jspdf (future) | Certificate Export |

## Deployment Architecture

```mermaid
graph LR
    A[User Browser] -->|HTTPS| B[Caddy Gateway]
    B --> C[Next.js App Server]
    C --> D[API Routes]
    D --> E[AI Services]
    D --> F[File Storage]
    C --> G[Static Assets]
```

- **Port Configuration**:
  - Next.js App: 3000
  - API Routes: 3000 (integrated)
  - WebSocket Service: 3003 (future)

## Monitoring & Logging

- Application logs: Console + File logging
- Error tracking: Sentry (future)
- Performance monitoring: Vercel Analytics (future)
- API monitoring: Custom middleware (future)

---

*Architecture Version: 1.0.0*
*Last Updated: 2025*
*Maintained by: Deejay Labs*
