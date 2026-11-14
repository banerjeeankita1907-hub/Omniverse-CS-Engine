# Omniverse CS Engine

A single-page interactive computer-science laboratory with visual demonstrations
for sorting, A* pathfinding, a small neural-network demo, fractals, a
cryptography teaching lab, Big-O growth curves, particle simulations and
binary-search-tree operations.

The application is intentionally dependency-free at runtime: it uses browser
Canvas APIs and plain JavaScript in one standalone HTML file.

## Modules

| Module | What it demonstrates |
|---|---|
| Sorting Arena | Bubble, selection, insertion, merge, quick and heap sort with animated bars |
| A* Pathfinding | Grid-based obstacle editing and heuristic search visualization |
| Neural Network | Small feed-forward network and activation visualization |
| Fractal Explorer | Interactive fractal rendering and zoom controls |
| Crypto Lab | Classical encoding / hash demonstrations for learning |
| Big-O Analyzer | Visual comparison of common growth classes |
| Particle Physics | Particle motion and interaction effects |
| Data Structures | Binary search tree insertion, deletion, search and traversals |

## Run locally

Open `Index.HTML` in a modern browser, or serve the directory over HTTP:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000/Index.HTML](http://localhost:8000/Index.HTML).

## Validation

Requires Node.js 18 or newer for the static checks:

```bash
node --test
```

The automated tests parse the inline JavaScript without executing browser code,
check the uniqueness of HTML IDs, validate that navigation targets exist, and
verify references to static DOM IDs. GitHub Actions runs these checks on pushes
and pull requests.

## Architecture

The current project is intentionally a single HTML document:
- HTML defines the module navigation and control surface.
- CSS defines the responsive visual system and Canvas layouts.
- One inline JavaScript program owns the visualizations, algorithm routines,
  event handlers and animation loops.

This keeps the demo easy to run without a bundler. A future maintainability
upgrade could split the algorithms and rendering code into testable modules.

## Educational and security scope

- Sorting and pathfinding demonstrations are visual teaching tools, not
  benchmark results. Runtime measurements should be performed separately with
  repeated runs, warm-up and a documented environment.
- The neural-network module is a small educational simulation, not a trained
  production model.
- The cryptography lab is for classical / illustrative demonstrations. It is
  not a secure cryptographic implementation and must not protect real data,
  credentials or messages.
- The particle and fractal modules are visual simulations, not physical
  measurement tools.
- The BST visualization demonstrates operations and traversals; it is not a
  production database or memory-efficient index.

## Licence

No separate licence file is currently provided. Ask before reusing or
redistributing this repository's code.
