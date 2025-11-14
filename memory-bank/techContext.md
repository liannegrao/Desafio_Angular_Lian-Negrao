# Technical Context: Ford Vehicle Dashboard

## Technology Stack

### Frontend Technologies
- **Framework**: Angular 19.2.0
- **Language**: TypeScript 5.7.2
- **Build Tool**: Angular CLI 19.2.6
- **Styling**: SCSS (Component-scoped)
- **State Management**: RxJS 7.8.0
- **HTTP Client**: Angular HttpClient

### Backend Technologies
- **Runtime**: Node.js 18+
- **Framework**: Express.js 5.1.0
- **CORS**: cors 2.8.5
- **Development**: JSON Server 1.0.0-beta.3

### Development Tools
- **Package Manager**: npm
- **Version Control**: Git
- **IDE**: Visual Studio Code
- **Concurrent Running**: concurrently 8.2.2

## Development Setup

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Latest stable version
- **Git**: For version control
- **VS Code**: Recommended IDE with Angular extensions

### Installation Process
```bash
# Clone repository
git clone https://github.com/liannegrao/Desafio_Angular_Lian-Negrao.git
cd Desafio_Angular_Lian-Negrao

# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

### Development Startup
```bash
# From project root - starts all services
npm run dev

# Individual services
npm run backend    # Express API on port 3002
npm run frontend   # Angular dev server on port 4200
npm run json-server # Mock data on port 3001
```

## Project Structure

### Root Level
```
Desafio_Angular_Lian-Negrao/
├── memory-bank/           # Project documentation
├── frontend/              # Angular application
├── backend/               # Express API
├── package.json           # Root scripts and deps
├── README.md              # Project documentation
└── render.yaml            # Deployment configuration
```

### Frontend Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── componentes/   # Feature components
│   │   ├── models/        # TypeScript interfaces
│   │   ├── service/       # API services
│   │   ├── app.config.ts  # App configuration
│   │   ├── app.routes.ts  # Route definitions
│   │   └── main.ts        # Bootstrap file
│   ├── assets/            # Static assets
│   ├── index.html         # Main HTML template
│   └── styles.css         # Global styles
├── angular.json           # Angular CLI config
└── package.json           # Frontend dependencies
```

### Backend Structure
```
backend/
├── api.js                 # Express server
├── db.json                # Mock data
├── package.json           # Backend dependencies
└── package-lock.json      # Lock file
```

## Dependencies Analysis

### Root Dependencies
- **concurrently**: `^8.2.2` - Run multiple commands simultaneously
  - Used for: Development workflow orchestration
  - Purpose: Start frontend, backend, and JSON server together

### Frontend Dependencies
- **@angular/core**: `^19.2.0` - Core Angular framework
- **@angular/common**: `^19.2.0` - Common Angular utilities
- **@angular/router**: `^19.2.0` - Client-side routing
- **@angular/forms**: `^19.2.0` - Form handling
- **rxjs**: `~7.8.0` - Reactive programming library
- **zone.js**: `~0.15.0` - Execution context for Angular

### Backend Dependencies
- **express**: `^5.1.0` - Web application framework
- **cors**: `^2.8.5` - Cross-origin resource sharing

### Development Dependencies
- **@angular-devkit/build-angular**: `^19.2.6` - Build tooling
- **@angular/cli**: `^19.2.6` - Command-line interface
- **typescript**: `~5.7.2` - TypeScript compiler
- **json-server**: `^1.0.0-beta.3` - Mock REST API

## Technical Constraints

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **No IE Support**: Internet Explorer not supported due to Angular 19 requirements

### Performance Constraints
- **Bundle Size**: Production build under 1MB (Angular budget)
- **Load Time**: Initial page load under 2 seconds
- **API Response**: Backend responses under 500ms for good UX

### Deployment Constraints
- **Frontend**: Must deploy to Vercel (static hosting)
- **Backend**: Must deploy to Render (web service)
- **Database**: Currently mock data, future database integration possible

## Tool Usage Patterns

### Angular CLI
```bash
# Development
ng serve                    # Start dev server
ng build                    # Production build
ng generate component name  # Generate component
ng test                     # Run unit tests

# Common usage in this project
ng new frontend --standalone  # Initial project setup
ng build --configuration production  # Production builds
```

### npm Scripts
```bash
# Root level
npm run dev         # Start all services
npm run build       # Build for production
npm run backend     # Start backend only
npm run frontend    # Start frontend only

# Frontend level
npm start           # Angular dev server
npm run build       # Production build
npm test            # Unit tests

# Backend level
npm start           # Express server
npm run json-server # Mock data server
```

### Git Workflow
```bash
# Branching strategy
git checkout -b feature/dashboard-component
git add .
git commit -m "feat: add dashboard component"
git push origin feature/dashboard-component

# Common workflow
git pull origin main
git checkout -b feature/new-feature
# ... development work ...
git add .
git commit -m "feat: implement new feature"
git push origin feature/new-feature
# Create PR, merge, delete branch
```

## Environment Configuration

### Development Environment
- **Frontend URL**: http://localhost:4200
- **Backend URL**: http://localhost:3002
- **JSON Server**: http://localhost:3001
- **Hot Reload**: Enabled for both frontend and backend

### Production Environment
- **Frontend**: Vercel deployment (auto-deploy from GitHub)
- **Backend**: Render deployment (configured via render.yaml)
- **API URL**: https://desafio-angular-lian-negrao.onrender.com

### Environment Variables
```bash
# Backend
PORT=3002
NODE_ENV=development

# Frontend (future enhancement)
API_URL=http://localhost:3002
```

## Build and Deployment

### Build Process
```bash
# Frontend build
cd frontend
npm run build --prod
# Output: dist/angular/

# Backend deployment
# Render auto-deploys from GitHub
# Uses render.yaml configuration
```

### Deployment Configuration
```yaml
# render.yaml
services:
  - type: web
    name: desafio-angular-lian-negrao
    runtime: node
    buildCommand: cd backend && npm install
    startCommand: cd backend && npm start
```

## Development Best Practices

### Code Quality
- **TypeScript Strict Mode**: Enabled for type safety
- **Linting**: Angular CLI built-in linting
- **Prettier**: Code formatting consistency
- **SCSS**: Component-scoped styling

### Testing Strategy
- **Unit Tests**: Component and service testing
- **Integration Tests**: API communication testing
- **E2E Tests**: End-to-end user journey testing (planned)

### Performance Optimization
- **Lazy Loading**: Route-based code splitting
- **Tree Shaking**: Remove unused code in production
- **Bundle Analysis**: Monitor bundle size growth
- **Image Optimization**: Efficient asset loading

## Troubleshooting Common Issues

### Port Conflicts
```bash
# Check what's using ports
netstat -ano | findstr :4200
netstat -ano | findstr :3002
netstat -ano | findstr :3001

# Kill process by PID
taskkill /PID <PID> /F
```

### Dependency Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Angular cache
rm -rf .angular/cache
```

### Build Failures
```bash
# Clear dist and rebuild
rm -rf dist
ng build --configuration production

# Check TypeScript errors
ng build --configuration development
