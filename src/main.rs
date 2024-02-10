use dlog::*;

fn main() {
    let mut logger = Logger::init(None);
    logger.set_text_color("#FF1231".to_string());
    logger.set_text_style(TextStyle::Bold | TextStyle::Italic);
    logger.set_log_type(LogType::StdOut);
    logger.log("HELLO WORLD");
}
