use std::fmt;
use std::ops::BitOr;
use ansi_term::{Style, Color};

pub enum LogLevel {
    Debug,
    Warning,
    All
}

pub enum LogType {
    StdOut,
    StdErr,
    File(String)
}

pub enum TextStyle {
    Bold,
    Italic,
    Strike,
    Underline,
    BoldItalic,
    BoldStrike,
    BoldUnderline,
    ItalicStrike,
    ItalicUnderline,
    BoldItalicStrike,
    BoldStrikeUnderline,
    BoldUnderlineItalic,
}

/// Logger struct that is the starting point which defines the logger.
/// # NOTE
/// Always define Logger as a mutable variable. This helps in disabling and other behaviours of the Logger struct
///
/// # Examples:
/// 
/// ```
/// let mut logger: Logger = Logger {
///     logtype: LogType::File("log.txt".to_string()),
///     loglevel: LogLevel::All,
///     enabled: true,
///     loglabel: "LOG".to_string(),
///     textstyle: TextStyle::Bold | TextStyle::Italic
/// };
///
/// OR, simply,
///
/// let mut logger: Logger = Logger::init(None);
///
/// OR, with file name,
///
/// let mut logger: Logger = Logger::init(Some("LOG"));
/// ```
///
pub struct Logger {
    pub enabled: bool,
    pub loglevel: LogLevel,
    pub logtype: LogType,
    pub textstyle: TextStyle,
    pub textcolor: String,
    pub loglabel: String
}

// Implementation for Logger struct
impl Logger {

    // init with default options (also includes the default log.txt)
    pub fn init(file: Option<&str>) -> Logger {
        match file {
            Some(filename) => {
                let enabled = true;
                let loglevel = LogLevel::Debug;
                let logtype = LogType::File(filename.to_string());
                let loglabel = "LOG".to_string();
                let textcolor = "#FF5000".to_string();
                let textstyle = TextStyle::Bold | TextStyle::Italic;
                Logger { logtype, loglevel, loglabel, enabled, textstyle, textcolor }
            }
            None => {
                let enabled = true;
                let loglevel = LogLevel::Debug;
                let logtype = LogType::File("LOG.txt".to_string());
                let loglabel = "LOG".to_string();
                let textcolor = "#FF5000".to_string();
                let textstyle = TextStyle::Bold | TextStyle::Italic;
                Logger { logtype, loglevel, loglabel, enabled, textstyle, textcolor }
            }
        }
    }

    pub fn log(&self, message: &str) {
        if self.enabled == true {
            match self.loglevel {
                LogLevel::All => self.__all(message),
                LogLevel::Debug => self.__debug(message),
                LogLevel::Warning => self.__warning(message),
            }
        }
    }

    pub fn set_text_color(&mut self, color: String) {
        self.textcolor = color;
    }

    pub fn set_text_style(&mut self, style: TextStyle) {
        self.textstyle = style;
    }

    pub fn set_log_type(&mut self, logtype: LogType) {
        self.logtype = logtype;
    }

    // Disable the logger
    pub fn disable(&mut self) {
        self.enabled = false;
    }

    pub fn enable(&mut self) {
        self.enabled = true;
    }

    fn __all(&self, message: &str) {
    }

    fn __debug(&self, message: &str) {
        match self.logtype {
            LogType::StdOut => {
                let fmtcolor = Self::__hex_to_ansi_color(&self.textcolor).expect("Invalid color");

                let fmtstyle = match self.textstyle {
                    TextStyle::Bold => Style::new().bold().fg(fmtcolor),
                    TextStyle::BoldItalic => Style::new().bold().italic().fg(fmtcolor),
                    TextStyle::BoldUnderline => Style::new().bold().underline().fg(fmtcolor),
                    TextStyle::BoldUnderlineItalic => Style::new().bold().underline().italic().fg(fmtcolor),
                    _ => todo!("DD")
                };

                let fmtstring = fmtstyle.paint(message);
                println!("DEBUG: {}", fmtstring);
            },

            _ => todo!("NOT IMPLEMENTED"),
        }
    }

    fn __warning(&self, message: &str) {

    }

    fn __hex_to_rgb(hex: &str) -> Option<(u8, u8, u8)> {
        if hex.len() != 7 || !hex.starts_with('#') {
            return None;
        }
        let r = u8::from_str_radix(&hex[1..3], 16).ok()?;
        let g = u8::from_str_radix(&hex[3..5], 16).ok()?;
        let b = u8::from_str_radix(&hex[5..7], 16).ok()?;
        Some((r, g, b))
    }

    fn __hex_to_ansi_color(hex: &str) -> Option<Color> {
        if let Some((r, g, b)) = Self::__hex_to_rgb(hex) {
            Some(Color::RGB(r, g, b))
        } else {
            None
        }
    }
}

impl fmt::Display for Logger {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{} ", self.enabled)
    }
}

// Implement bit operator for textstyle for handling multiple text formatting operations
impl BitOr for TextStyle {
    type Output = Self;
    fn bitor(self, other: Self) -> Self::Output {

        match(self, other) {
            (TextStyle::Bold, TextStyle::Italic) | (TextStyle::Italic, TextStyle::Bold) => TextStyle::BoldItalic,
            (TextStyle::Bold, TextStyle::Strike) | (TextStyle::Strike, TextStyle::Bold) => TextStyle::BoldStrike,
            (TextStyle::Bold, TextStyle::Underline) | (TextStyle::Underline, TextStyle::Bold) => TextStyle::BoldUnderline,
            (TextStyle::BoldItalic, TextStyle::Strike) | (TextStyle::Strike, TextStyle::BoldItalic) => TextStyle::BoldItalicStrike,
            (TextStyle::BoldStrike, TextStyle::Underline) | (TextStyle::BoldStrike, TextStyle::Underline) | (TextStyle::BoldUnderline, TextStyle::Strike) | (TextStyle::Strike, TextStyle::BoldUnderline) => TextStyle::BoldStrikeUnderline,
            (TextStyle::Italic, TextStyle::Strike) | (TextStyle::Strike, TextStyle::Italic) => TextStyle::ItalicStrike,
            (TextStyle::Italic, TextStyle::Underline) | (TextStyle::Underline, TextStyle::Italic) => TextStyle::ItalicUnderline,
            (TextStyle::ItalicStrike, TextStyle::Bold) | (TextStyle::Bold, TextStyle::ItalicStrike) => TextStyle::BoldItalicStrike,
            (TextStyle::Italic, TextStyle::BoldUnderline) => TextStyle::BoldUnderlineItalic,
            (TextStyle::BoldUnderline, TextStyle::Italic) => TextStyle::BoldUnderlineItalic,
            _ => TextStyle::Bold
        }
    }
}
