var searchIndex = JSON.parse('{\
"ansi_term":{"doc":"This is a library for controlling colours and formatting, …","t":"GFGDDGFGNNCENNNDDNNNDDNNMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLMMMMMLMMMLLLLLLLLLLLLLLLLFLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFFLLLL","n":["ANSIByteString","ANSIByteStrings","ANSIByteStrings","ANSIGenericString","ANSIGenericStrings","ANSIString","ANSIStrings","ANSIStrings","Black","Blue","Color","Colour","Cyan","Fixed","Green","Infix","Prefix","Purple","RGB","Red","Style","Suffix","White","Yellow","background","blink","blink","bold","bold","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","default","deref","dimmed","dimmed","eq","eq","eq","eq","fg","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","foreground","from","from","from","from","from","from","from","from","from","hidden","hidden","infix","infix","into","into","into","into","into","into","into","is_blink","is_bold","is_dimmed","is_hidden","is_italic","is_plain","is_reverse","is_strikethrough","is_underline","italic","italic","new","normal","on","on","paint","paint","prefix","prefix","reverse","reverse","strikethrough","strikethrough","style_ref","style_ref_mut","sub_string","suffix","suffix","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","to_string","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","underline","underline","unstyle","unstyled_len","write_to","write_to","write_to","write_to"],"q":[[0,"ansi_term"],[165,"alloc::borrow"],[166,"core::marker"],[167,"core::cmp"],[168,"core::fmt"],[169,"core::fmt"],[170,"alloc::vec"],[171,"alloc::string"],[172,"core::result"],[173,"core::any"],[174,"std::io::error"],[175,"std::io"]],"d":["An <code>ANSIByteString</code> represents a formatted series of bytes.  …","A function to construct an <code>ANSIByteStrings</code> instance.","A set of <code>ANSIByteString</code>s collected together, in order to be","An <code>ANSIGenericString</code> includes a generic string type and a …","A set of <code>ANSIGenericString</code>s collected together, in order …","An ANSI String is a string coupled with the <code>Style</code> to …","A function to construct an <code>ANSIStrings</code> instance.","A set of <code>ANSIString</code>s collected together, in order to be …","Colour #0 (foreground code <code>30</code>, background code <code>40</code>).","Colour #4 (foreground code <code>34</code>, background code <code>44</code>).","Color is a type alias for <code>Colour</code>.","A colour is one specific type of ANSI escape code, and can …","Colour #6 (foreground code <code>36</code>, background code <code>46</code>).","A colour number from 0 to 255, for use in 256-colour …","Colour #2 (foreground code <code>32</code>, background code <code>42</code>).","Like <code>ANSIString</code>, but only displays the difference between …","Like <code>ANSIString</code>, but only displays the style prefix.","Colour #5 (foreground code <code>35</code>, background code <code>45</code>).","A 24-bit RGB color, as specified by ISO-8613-3.","Colour #1 (foreground code <code>31</code>, background code <code>41</code>).","A style is a collection of properties that can format a …","Like <code>ANSIString</code>, but only displays the style suffix.","Colour #7 (foreground code <code>37</code>, background code <code>47</code>).","Colour #3 (foreground code <code>33</code>, background code <code>43</code>).","The style’s background colour, if it has one.","Returns a <code>Style</code> with the blink property set.","Returns a <code>Style</code> with the foreground colour set to this …","Returns a <code>Style</code> with the bold property set.","Returns a <code>Style</code> with the foreground colour set to this …","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns a style with <em>no</em> properties set. Formatting text …","","Returns a <code>Style</code> with the dimmed property set.","Returns a <code>Style</code> with the foreground colour set to this …","","","","","Returns a <code>Style</code> with the foreground colour property set.","","","","","","","","","","","","","The style’s foreground colour, if it has one.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","You can turn a <code>Colour</code> into a <code>Style</code> with the foreground …","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns a <code>Style</code> with the hidden property set.","Returns a <code>Style</code> with the foreground colour set to this …","The infix bytes between this style and <code>next</code> style. These …","The infix bytes between this colour and <code>next</code> colour. These …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Whether this style is blinking.","Whether this style is bold.","Whether this style is dimmed.","Whether this style is hidden.","Whether this style is italic.","Return true if this <code>Style</code> has no actual styles, and can be …","Whether this style has reverse colours.","Whether this style is struckthrough.","Whether this style is underlined.","Returns a <code>Style</code> with the italic property set.","Returns a <code>Style</code> with the foreground colour set to this …","Creates a new Style with no properties set.","Returns a <code>Style</code> with the foreground colour set to this …","Returns a <code>Style</code> with the background colour property set.","Returns a <code>Style</code> with the foreground colour set to this …","Paints the given text with this colour, returning an ANSI …","Paints the given text with this colour, returning an ANSI …","The prefix bytes for this style. These are the bytes that …","The prefix bytes for this colour as a <code>Style</code>. These are the …","Returns a <code>Style</code> with the reverse property set.","Returns a <code>Style</code> with the foreground colour set to this …","Returns a <code>Style</code> with the strikethrough property set.","Returns a <code>Style</code> with the foreground colour set to this …","Directly access the style","Directly access the style mutably","Return a substring of the given ANSIStrings sequence, …","The suffix for this style. These are the bytes that tell …","The suffix for this colour as a <code>Style</code>. These are the bytes …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns a <code>Style</code> with the underline property set.","Returns a <code>Style</code> with the foreground colour set to this …","Return a concatenated copy of <code>strs</code> without the formatting, …","Return the unstyled length of ANSIStrings. This is …","Write an <code>ANSIByteString</code> to an <code>io::Write</code>.  This writes the …","Write <code>ANSIByteStrings</code> to an <code>io::Write</code>.  This writes the …","Write an <code>ANSIByteString</code> to an <code>io::Write</code>.  This writes the …","Write <code>ANSIByteStrings</code> to an <code>io::Write</code>.  This writes the …"],"i":[0,0,0,0,0,0,0,0,7,7,0,0,7,7,7,0,0,7,7,7,0,0,7,7,6,6,7,6,7,8,9,10,6,7,11,17,8,9,10,6,7,11,17,8,9,10,6,7,11,8,9,10,6,7,11,6,11,6,7,6,7,11,17,6,4,5,8,8,9,9,10,10,6,7,11,17,6,8,9,10,6,6,7,11,11,17,6,7,6,7,8,9,10,6,7,11,17,6,6,6,6,6,6,6,6,6,6,7,6,7,6,7,6,7,6,7,6,7,6,7,11,11,0,6,7,8,9,10,6,7,11,8,9,10,11,17,8,9,10,6,7,11,17,8,9,10,6,7,11,17,8,9,10,6,7,11,17,6,7,0,0,1,3,11,17],"f":[0,[[[2,[1]]],3],0,0,0,0,[[[2,[4]]],5],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[6,6],[7,6],[6,6],[7,6],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[8,8],[9,9],[10,10],[6,6],[7,7],[[[11,[-1]]],[[11,[-1]]],[12,13]],[[-1,-2],14,[],[]],[[-1,-2],14,[],[]],[[-1,-2],14,[],[]],[[-1,-2],14,[],[]],[[-1,-2],14,[],[]],[[-1,-2],14,[],[]],[[],6],[[[11,[-1]]],-1,[12,13]],[6,6],[7,6],[[6,6],15],[[7,7],15],[[[11,[-1]],[11,[-1]]],15,[16,12,13]],[[[17,[-1]],[17,[-1]]],15,[16,16,12,13]],[[6,7],6],[[4,18],19],[[5,18],19],[[8,18],19],[[8,18],19],[[9,18],19],[[9,18],19],[[10,18],19],[[10,18],19],[[6,18],19],[[7,18],19],[[[11,[-1]],18],19,[20,12,13]],[[[17,[-1]],18],19,[16,20,12,13]],0,[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[7,6],[-1,-1,[]],[-2,[[11,[-1]]],[12,13],[[22,[[21,[-1]]]]]],[-1,-1,[]],[-1,-1,[]],[6,6],[7,6],[[6,6],9],[[7,7],9],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,0,0,[6,15],0,0,0,[6,6],[7,6],[[],6],[7,6],[[6,7],6],[[7,7],6],[[6,-2],[[11,[-1]]],[12,13],[[22,[[21,[-1]]]]]],[[7,-2],[[11,[-1]]],[12,13],[[22,[[21,[-1]]]]]],[6,8],[7,8],[6,6],[7,6],[6,6],[7,6],[[[11,[-1]]],6,[12,13]],[[[11,[-1]]],6,[12,13]],[[23,23,5],[[24,[4]]]],[6,10],[7,10],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,[[26,[-2]]],[],[]],[-1,27,[]],[-1,27,[]],[-1,27,[]],[-1,27,[]],[-1,27,[]],[-1,27,[]],[-1,27,[]],[6,6],[7,6],[5,25],[5,23],[[1,-1],[[28,[14]]],29],[[3,-1],[[28,[14]]],29],[[[11,[[2,[30]]]],-1],[[28,[14]]],29],[[[17,[[2,[30]]]],-1],[[28,[14]]],29]],"c":[],"p":[[6,"ANSIByteString",0],[15,"slice"],[6,"ANSIByteStrings",0],[6,"ANSIString",0],[6,"ANSIStrings",0],[3,"Style",0],[4,"Colour",0],[3,"Prefix",0],[3,"Infix",0],[3,"Suffix",0],[3,"ANSIGenericString",0],[8,"ToOwned",165],[8,"Sized",166],[15,"tuple"],[15,"bool"],[8,"PartialEq",167],[3,"ANSIGenericStrings",0],[3,"Formatter",168],[6,"Result",168],[8,"Debug",168],[4,"Cow",165],[8,"Into",169],[15,"usize"],[3,"Vec",170],[3,"String",171],[4,"Result",172],[3,"TypeId",173],[6,"Result",174],[8,"Write",175],[15,"u8"]],"b":[[66,"impl-Debug-for-Prefix"],[67,"impl-Display-for-Prefix"],[68,"impl-Debug-for-Infix"],[69,"impl-Display-for-Infix"],[70,"impl-Debug-for-Suffix"],[71,"impl-Display-for-Suffix"]]},\
"dlog":{"doc":"","t":"NNNNNNNNNNNNNEEDNNNENNLLLLLLLLLLLMLLLLLLLLLLLMMMLLLMMLLLLLLLLLLLLL","n":["All","Bold","BoldItalic","BoldItalicStrike","BoldStrike","BoldStrikeUnderline","BoldUnderline","BoldUnderlineItalic","Debug","File","Italic","ItalicStrike","ItalicUnderline","LogLevel","LogType","Logger","StdErr","StdOut","Strike","TextStyle","Underline","Warning","bitor","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","disable","enable","enabled","fmt","from","from","from","from","init","into","into","into","into","log","loglabel","loglevel","logtype","set_log_type","set_text_color","set_text_style","textcolor","textstyle","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id"],"q":[[0,"dlog"],[66,"core::fmt"],[67,"core::fmt"],[68,"alloc::string"],[69,"core::result"],[70,"core::any"]],"d":["","","","","","","","","","","","","","","","Logger struct that is the starting point which defines the …","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","",""],"i":[12,1,1,1,1,1,1,1,12,8,1,1,1,0,0,0,8,8,1,0,1,12,1,12,8,1,2,12,8,1,2,2,2,2,2,12,8,1,2,2,12,8,1,2,2,2,2,2,2,2,2,2,2,2,12,8,1,2,12,8,1,2,12,8,1,2],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[1,1]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[2,3],[2,3],0,[[2,4],5],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[[[7,[6]]],2],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[2,6],3],0,0,0,[[2,8],3],[[2,9],3],[[2,1],3],0,0,[-1,9,[]],[-1,[[10,[-2]]],[],[]],[-1,[[10,[-2]]],[],[]],[-1,[[10,[-2]]],[],[]],[-1,[[10,[-2]]],[],[]],[-1,[[10,[-2]]],[],[]],[-1,[[10,[-2]]],[],[]],[-1,[[10,[-2]]],[],[]],[-1,[[10,[-2]]],[],[]],[-1,11,[]],[-1,11,[]],[-1,11,[]],[-1,11,[]]],"c":[],"p":[[4,"TextStyle",0],[3,"Logger",0],[15,"tuple"],[3,"Formatter",66],[6,"Result",66],[15,"str"],[4,"Option",67],[4,"LogType",0],[3,"String",68],[4,"Result",69],[3,"TypeId",70],[4,"LogLevel",0]],"b":[]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
