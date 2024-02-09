# dlog
Logger library written in Rust

# Usage
## In rust programs
```rust
use dlog::Logger;

fn main() {
    // NOTE: should declare as mut for the disable/enable feature
    let mut logger: Logger = Logger::init(Some("LOG.txt"));
    logger.msg("HELLO WORLD");
}
```
# Documentation
