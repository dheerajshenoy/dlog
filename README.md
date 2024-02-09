# dlog
Logger library written in Rust

# Usage
## In rust programs
```rust
use dlog::{Logger, LogType, LogLevel, TextStyle};

fn main() {

    // simple method with defaults
    let mut logger: Logger = Logger::init(Some("LOG.txt"));
    logger.msg("HELLO WORLD");

    // constructing the logger with custom options
    let mut logger: Logger = Logger {
        loglabel: "CUSTOM LOG LABEL".to_string(),
        loglevel: LogLevel::Debug,
        logtype: LogType::File("LOG.txt".to_string()),
        textcolor: "#686956".to_string(),
        textstyle: TextStyle::BoldItalic,
        enabled: false,
    };

    logger.msg("This message is not seen");
    logger.enable();
    logger.msg("This message is seen!!!");
    logger.msg("Some more messages");
}
```
# Output
![output](./output.png)

# Documentation
