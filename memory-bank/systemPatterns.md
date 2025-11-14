# System Patterns: Ford Vehicle Dashboard

## System Architecture

### Overall Architecture
```
┌─────────────────┐    HTTP/HTTPS    ┌─────────────────┐
│   Angular SPA   │◄────────────────►│  Express API    │
│   (Frontend)    │                  │   (Backend)     │
│                 │                  │                 │
│ - Components    │                  │ - REST Routes   │
│ - Services      │                  │ - CORS Enabled  │
│ - Routing       │                  │ - JSON Response │
│ - RxJS          │                  └─────────────────┘
└─────────────────┘                          │
                                              │
                                              ▼
                                   ┌─────────────────┐
                                   │   JSON Server   │
                                   │   (Mock Data)   │
                                   │                 │
                                   │ - db.json       │
                                   │ - REST API      │
                                   └─────────────────┘
```

### Component Architecture
```
frontend/src/app/
├── app.config.ts          # Application configuration
├── app.routes.ts          # Route definitions
├── app.component.*        # Root component
├── models/                # TypeScript interfaces
│   ├── usuario.model.ts
│   ├── veiculo.model.ts
│   └── carbyvin.model.ts
├── service/               # API communication
│   └── api.service.ts
└── componentes/           # Feature components
    ├── home/
    ├── login/
    └── dashboard/
```

## Key Technical Decisions

### Frontend Framework
- **Angular 19+**: Latest version for modern features and performance
- **Standalone Components**: Simplified architecture without modules
- **TypeScript**: Strict typing for maintainability and developer experience

### Backend Architecture
- **Express.js**: Lightweight, flexible web framework
- **RESTful API**: Standard HTTP methods and resource-based URLs
- **CORS Enabled**: Cross-origin requests for development
- **JSON Responses**: Consistent data format

### State Management
- **RxJS Observables**: Reactive programming for async operations
- **Service Layer**: Centralized API communication
- **Component-Level State**: Local state management per component

## Design Patterns

### Service Pattern
```typescript
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly apiURL = 'https://api.example.com';

  getData(): Observable<Data> {
    return this.http.get<Data>(`${this.apiURL}/endpoint`);
  }
}
```

### Component Pattern
```typescript
@Component({...})
export class DashboardComponent implements OnInit {
  private readonly apiService = inject(ApiService);

  vehicles$ = this.apiService.getVehicles();

  ngOnInit() {
    // Component initialization
  }
}
```

### Model Pattern
```typescript
export interface Vehicle {
  id: number;
  name: string;
  status: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
```

## Component Relationships

### Data Flow
```
User Interaction → Component → Service → API → Backend → Response → Service → Component → UI Update
```

### Authentication Flow
```
Login Form → ApiService.login() → /login POST → Validate Credentials → Return User Data → Store Session → Redirect to Dashboard
```

### Vehicle Data Flow
```
Dashboard Component → ApiService.getVehicles() → /vehicles GET → Return Vehicle Array → Display in Template → User Views Data
```

### VIN Search Flow
```
Search Form → ApiService.checkVinCode() → /vehicleData POST → Process VIN → Return Vehicle Details → Display Results
```

## Critical Implementation Paths

### Application Bootstrap
1. **main.ts**: Bootstrap Angular application
2. **app.config.ts**: Configure providers and routing
3. **app.component.ts**: Root component initialization
4. **Route Guards**: Authentication checks (if implemented)

### API Communication
1. **HttpClient**: Angular's HTTP service for requests
2. **Interceptors**: Request/response transformation (future enhancement)
3. **Error Handling**: Global error management strategy
4. **Retry Logic**: Automatic retry for failed requests

### Component Lifecycle
1. **OnInit**: Component initialization and data loading
2. **OnDestroy**: Cleanup subscriptions and resources
3. **Change Detection**: Angular's reactive updates
4. **View Updates**: Template rendering based on data changes

## Security Patterns

### Authentication
- **Basic Auth**: Username/password validation
- **Session Management**: Client-side session storage
- **Route Protection**: Guard-based access control (planned)

### API Security
- **CORS**: Configured for allowed origins
- **Input Validation**: Server-side request validation
- **Error Handling**: Secure error responses without data leakage

## Performance Patterns

### Lazy Loading
- **Route-based**: Components loaded on demand
- **Bundle Splitting**: Reduced initial bundle size
- **Preloading**: Strategic loading of critical routes

### Caching Strategy
- **Browser Caching**: HTTP cache headers
- **Service Worker**: Offline capability (future)
- **Memory Caching**: In-app data caching

### Optimization Techniques
- **OnPush Change Detection**: Reduced change detection cycles
- **TrackBy Functions**: Efficient list rendering
- **Async Pipes**: Automatic subscription management

## Error Handling Patterns

### API Errors
```typescript
this.apiService.getData().pipe(
  catchError(error => {
    console.error('API Error:', error);
    return of(null); // Return fallback value
  })
).subscribe(data => {
  if (data) {
    // Handle success
  } else {
    // Handle error state
  }
});
```

### Component Error Boundaries
- **Error Components**: Dedicated error display components
- **Fallback UI**: Graceful degradation on failures
- **User Feedback**: Clear error messages and recovery options

## Testing Patterns

### Unit Testing
- **Component Testing**: Isolated component behavior
- **Service Testing**: API service mocking
- **Model Testing**: Interface validation

### Integration Testing
- **API Integration**: End-to-end API communication
- **Component Integration**: Component interaction testing
- **Routing Testing**: Navigation flow validation

## Deployment Patterns

### Development
- **Local Development**: Concurrent frontend/backend startup
- **Hot Reload**: Automatic browser refresh on changes
- **Debugging**: Browser dev tools and Angular DevTools

### Production
- **Build Optimization**: Tree-shaking and minification
- **CDN Deployment**: Static asset optimization
- **API Deployment**: Containerized backend deployment

### Environment Management
- **Environment Files**: Configuration per environment
- **Build Variables**: Dynamic configuration injection
- **Feature Flags**: Runtime feature toggling
