# Valdi

## True Native Performance

Unlike frameworks that rely on web views or JavaScript bridges, Valdi compiles declaratively rendered TypeScript components into platform-native views. Valdi also includes several other performance advantages:

*   **Automatic view recycling** - Global view pooling system reuses native views across all screens, dramatically reducing inflation latency
*   **Optimized component rendering** - Components re-render independently without triggering parent re-renders, enabling fast incremental updates
*   **Optimized layout engine** - C++ layout engine runs on the main thread with minimal marshalling overhead
*   **Viewport-aware rendering** - Only visible views are inflated, making infinite scrolling performant by default

Learn more in our Performance Optimization Guide.

## Developer Experience Built for Speed

Valdi eliminates the traditional compile-test-debug cycle that slows native development:

*   **Instant hot reload** - See changes in milliseconds on iOS, Android, or desktop without recompiling
*   **Full VSCode debugging** - Set breakpoints, inspect variables, profile performance, and capture heap dumps directly in VSCode
*   **Familiar syntax** - TSX components with TypeScript for type safety

## Flexible Adoption Model

Valdi integrates easily into existing apps - start small and scale as needed:

*   **Embed Valdi in native** - Drop Valdi components into existing UIKit or Android view hierarchies
*   **Embed native in Valdi** - Use platform-specific views within Valdi layouts via `<custom-view>`
*   **Polyglot modules** - Write performance-critical code in C++, Swift, Kotlin, or Objective-C with type-safe bindings to TypeScript
*   **Full-stack architecture** - Build entire features in Valdi with worker threads for background processing, eliminating platform-specific bridge code

## Deep Native Integration

Valdi generates type-safe bindings between TypeScript and native platforms:

*   **Automatic code generation** - TypeScript interfaces compile to Kotlin, Objective-C, and Swift bindings
*   **Native API access** - Direct access to platform APIs and third-party native libraries through polyglot modules
*   **Bidirectional communication** - Pass complex data structures and callbacks between TypeScript and native code safely
*   **Native protobuf support** - Seamless integration with protobuf for efficient data serialization

## Proven at Scale

*   Powers critical features in production Snap apps.
*   Supports advanced animations, real-time rendering, and complex gesture systems

## Feature Highlights

*   Flexbox layout system with automatic RTL support
*   Worker threads for multi-threaded JavaScript execution
*   Native animations for native look and feel
*   Advanced gesture recognition with platform-native handling
*   Built-in testing framework with component-level unit tests
*   Bazel integration for reproducible, incremental builds

Need Help?
